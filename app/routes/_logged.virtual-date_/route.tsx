import {
  Typography,
  Select,
  Card,
  Button,
  Row,
  Col,
  message,
  Modal,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function VirtualDatePage() {
  const { user } = useUserContext()
  const [selectedSetting, setSelectedSetting] = useState<string>('restaurant')
  const [selectedTheme, setSelectedTheme] = useState<string>('romantic')

  // Fetch current conversation if exists
  const { data: currentConversation, refetch } =
    Api.conversation.findFirst.useQuery({
      where: {
        userId: user?.id,
        type: 'virtual-date',
        setting: selectedSetting,
        theme: selectedTheme,
      },
      include: {
        messages: true,
      },
    })

  // Create new conversation
  const { mutateAsync: createConversation } =
    Api.conversation.create.useMutation()

  // Create new message
  const { mutateAsync: createMessage } = Api.message.create.useMutation()

  // Create memory
  const { mutateAsync: createMemory } = Api.memory.create.useMutation()

  const settings = [
    { value: 'restaurant', label: 'Romantic Restaurant' },
    { value: 'beach', label: 'Sunset Beach' },
    { value: 'park', label: 'City Park' },
    { value: 'cafe', label: 'Cozy Café' },
  ]

  const themes = [
    { value: 'romantic', label: 'Romantic' },
    { value: 'casual', label: 'Casual' },
    { value: 'adventurous', label: 'Adventurous' },
    { value: 'intellectual', label: 'Intellectual' },
  ]

  const startNewDate = async () => {
    try {
      const conversation = await createConversation({
        data: {
          type: 'virtual-date',
          setting: selectedSetting,
          theme: selectedTheme,
          userId: user?.id || '',
        },
      })

      await createMessage({
        data: {
          content: `Welcome to our ${selectedTheme} date at the ${selectedSetting}!`,
          type: 'system',
          sender: 'system',
          conversationId: conversation.id,
        },
      })

      message.success('Virtual date started!')
      refetch()
    } catch (error) {
      message.error('Failed to start date')
    }
  }

  const saveMemory = async () => {
    try {
      await createMemory({
        data: {
          type: 'virtual-date',
          content: `${selectedTheme} date at ${selectedSetting}`,
          privacyLevel: 1,
          moodRating: 5,
          userId: user?.id || '',
        },
      })
      message.success('Memory saved!')
    } catch (error) {
      message.error('Failed to save memory')
    }
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}>
          <i className="las la-heart"></i> Virtual Date Experience
        </Title>
        <Text>
          Create magical moments with your AI companion in various settings
        </Text>
      </div>

      <Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <div style={{ marginBottom: '1rem' }}>
              <Text strong>Select Date Setting</Text>
              <Select
                style={{ width: '100%' }}
                value={selectedSetting}
                onChange={setSelectedSetting}
                options={settings}
              />
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div style={{ marginBottom: '1rem' }}>
              <Text strong>Select Date Theme</Text>
              <Select
                style={{ width: '100%' }}
                value={selectedTheme}
                onChange={setSelectedTheme}
                options={themes}
              />
            </div>
          </Col>
        </Row>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Button
            type="primary"
            onClick={startNewDate}
            icon={<i className="las la-play"></i>}
          >
            Start New Date
          </Button>
          <Button
            style={{ marginLeft: '1rem' }}
            onClick={saveMemory}
            icon={<i className="las la-save"></i>}
          >
            Save as Memory
          </Button>
        </div>
      </Card>

      {currentConversation && (
        <Card style={{ marginTop: '1rem' }}>
          <Title level={4}>
            <i className="las la-comments"></i> Current Date Conversation
          </Title>
          {currentConversation.messages?.map(message => (
            <div
              key={message.id}
              style={{
                marginBottom: '0.5rem',
                textAlign: message.sender === 'user' ? 'right' : 'left',
              }}
            >
              <Text type={message.sender === 'user' ? 'success' : 'secondary'}>
                {message.content}
              </Text>
              <br />
              <Text type="secondary" style={{ fontSize: '0.8rem' }}>
                {dayjs(message.createdAt).format('HH:mm')}
              </Text>
            </div>
          ))}
        </Card>
      )}
    </PageLayout>
  )
}
