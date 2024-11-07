import { Typography, Input, Button, Card, Space, Spin, message } from 'antd'
import { useState, useRef, useEffect } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ChatRoomPage() {
  const { user } = useUserContext()
  const [messageText, setMessageText] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { mutateAsync: upload } = useUploadPublic()

  // Queries and Mutations
  const { data: conversations } = Api.conversation.findFirst.useQuery({
    where: { userId: user?.id },
    include: { messages: true },
  })

  const { mutateAsync: createMessage } = Api.message.create.useMutation()
  const { mutateAsync: generateAiResponse } = Api.ai.generateText.useMutation()
  const { mutateAsync: generateImage } = Api.ai.generateImage.useMutation()
  const { mutateAsync: audioToText } = Api.ai.audioToText.useMutation()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [conversations?.messages])

  const handleSendMessage = async () => {
    if (!messageText.trim()) return

    try {
      // Save user message
      await createMessage({
        data: {
          content: messageText,
          type: 'text',
          sender: 'user',
          conversationId: conversations?.id || '',
        },
      })

      // Get AI response
      const aiResponse = await generateAiResponse({ prompt: messageText })

      // Save AI response
      await createMessage({
        data: {
          content: aiResponse.answer,
          type: 'text',
          sender: 'ai',
          conversationId: conversations?.id || '',
        },
      })

      setMessageText('')
    } catch (error) {
      message.error('Failed to send message')
    }
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const recorder = new MediaRecorder(stream)
      const chunks: BlobPart[] = []

      recorder.ondataavailable = e => chunks.push(e.data)
      recorder.onstop = async () => {
        const audioBlob = new Blob(chunks, { type: 'audio/mp3' })
        const file = new File([audioBlob], 'audio.mp3', { type: 'audio/mp3' })
        const { url } = await upload({ file })
        const { translation } = await audioToText({ url })

        await createMessage({
          data: {
            content: translation,
            type: 'audio',
            sender: 'user',
            conversationId: conversations?.id || '',
          },
        })
      }

      recorder.start()
      setMediaRecorder(recorder)
      setIsRecording(true)
    } catch (error) {
      message.error('Failed to start recording')
    }
  }

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop()
      setIsRecording(false)
    }
  }

  const generateArtwork = async () => {
    try {
      const { url } = await generateImage({ prompt: messageText })
      await createMessage({
        data: {
          content: url,
          type: 'image',
          sender: 'user',
          conversationId: conversations?.id || '',
        },
      })
      setMessageText('')
    } catch (error) {
      message.error('Failed to generate artwork')
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2} style={{ textAlign: 'center' }}>
        <i className="las la-comments"></i> Chat Room
      </Title>
      <Text
        type="secondary"
        style={{ display: 'block', textAlign: 'center', marginBottom: 24 }}
      >
        Chat with your AI companion in real-time
      </Text>

      <Card style={{ height: '60vh', overflowY: 'auto', marginBottom: 16 }}>
        {conversations?.messages?.map(message => (
          <div
            key={message.id}
            style={{
              display: 'flex',
              justifyContent:
                message.sender === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: 16,
            }}
          >
            <Card
              size="small"
              style={{
                maxWidth: '70%',
                backgroundColor:
                  message.sender === 'user' ? '#1890ff' : '#f0f2f5',
              }}
            >
              {message.type === 'image' ? (
                <img
                  src={message.content || ''}
                  alt="AI Generated"
                  style={{ maxWidth: '100%' }}
                />
              ) : (
                <Text
                  style={{
                    color: message.sender === 'user' ? 'white' : 'black',
                  }}
                >
                  {message.content}
                </Text>
              )}
              <div>
                <Text
                  type="secondary"
                  style={{
                    fontSize: '12px',
                    color: message.sender === 'user' ? 'white' : 'grey',
                  }}
                >
                  {dayjs(message.createdAt).format('HH:mm')}
                </Text>
              </div>
            </Card>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </Card>

      <Space.Compact style={{ width: '100%' }}>
        <Input
          value={messageText}
          onChange={e => setMessageText(e.target.value)}
          onPressEnter={handleSendMessage}
          placeholder="Type your message..."
        />
        <Button onClick={handleSendMessage} type="primary">
          <i className="las la-paper-plane"></i>
        </Button>
        <Button
          onClick={isRecording ? stopRecording : startRecording}
          danger={isRecording}
        >
          <i className={`las ${isRecording ? 'la-stop' : 'la-microphone'}`}></i>
        </Button>
        <Button onClick={generateArtwork}>
          <i className="las la-paint-brush"></i>
        </Button>
      </Space.Compact>
    </PageLayout>
  )
}
