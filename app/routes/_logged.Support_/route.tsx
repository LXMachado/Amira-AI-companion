import {
  Typography,
  Tabs,
  Card,
  Form,
  Input,
  Button,
  List,
  Timeline,
} from 'antd'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
const { TextArea } = Input
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SupportFAQsPage() {
  const { user } = useUserContext()
  const [activeTab, setActiveTab] = useState('1')
  const [form] = Form.useForm()

  // Fetch support history (using notifications as support tickets)
  const { data: supportHistory } = Api.notification.findMany.useQuery({
    where: { userId: user?.id, type: 'SUPPORT' },
    orderBy: { createdAt: 'desc' },
  })

  // Create support ticket mutation
  const { mutateAsync: createTicket } = Api.notification.create.useMutation()

  const handleSubmitSupport = async (values: {
    title: string
    message: string
  }) => {
    try {
      await createTicket({
        data: {
          type: 'SUPPORT',
          content: JSON.stringify({
            title: values.title,
            message: values.message,
          }),
          status: 'PENDING',
          userId: user?.id as string,
        },
      })
      form.resetFields()
    } catch (error) {
      console.error('Error submitting support ticket:', error)
    }
  }

  const faqItems = [
    {
      question: 'How do I customize my companion?',
      answer:
        "Navigate to the Companion Customization page to modify your companion's appearance, personality traits, and interests.",
    },
    {
      question: 'How do virtual dates work?',
      answer:
        'Virtual dates are interactive sessions where you can engage with your companion in various scenarios and settings.',
    },
    {
      question: 'How do I track my mood?',
      answer:
        'Use the Memory Bank & Reflection page to log your daily moods and track your emotional well-being over time.',
    },
  ]

  return (
    <PageLayout layout="narrow">
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <Title level={2}>
          <i className="las la-question-circle" style={{ marginRight: 8 }}></i>
          Support & FAQs
        </Title>
        <Paragraph>
          Get help and learn more about using our app's features
        </Paragraph>
      </div>

      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        items={[
          {
            key: '1',
            label: (
              <span>
                <i className="las la-question" style={{ marginRight: 8 }}></i>
                FAQs
              </span>
            ),
            children: (
              <List
                itemLayout="vertical"
                dataSource={faqItems}
                renderItem={item => (
                  <Card style={{ marginBottom: 16 }}>
                    <Title level={5}>
                      <i
                        className="las la-question-circle"
                        style={{ marginRight: 8 }}
                      ></i>
                      {item.question}
                    </Title>
                    <Paragraph>{item.answer}</Paragraph>
                  </Card>
                )}
              />
            ),
          },
          {
            key: '2',
            label: (
              <span>
                <i className="las la-headset" style={{ marginRight: 8 }}></i>
                Contact Support
              </span>
            ),
            children: (
              <Card>
                <Form
                  form={form}
                  onFinish={handleSubmitSupport}
                  layout="vertical"
                >
                  <Form.Item
                    name="title"
                    label="Subject"
                    rules={[
                      { required: true, message: 'Please enter a subject' },
                    ]}
                  >
                    <Input placeholder="Brief description of your issue" />
                  </Form.Item>
                  <Form.Item
                    name="message"
                    label="Message"
                    rules={[
                      { required: true, message: 'Please enter your message' },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Describe your issue in detail"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      icon={<i className="las la-paper-plane" />}
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            ),
          },
          {
            key: '3',
            label: (
              <span>
                <i className="las la-history" style={{ marginRight: 8 }}></i>
                Support History
              </span>
            ),
            children: (
              <Timeline
                items={supportHistory?.map(ticket => {
                  const content = JSON.parse(ticket.content || '{}')
                  return {
                    children: (
                      <Card style={{ marginBottom: 16 }}>
                        <Title level={5}>{content.title}</Title>
                        <Paragraph>{content.message}</Paragraph>
                        <Text type="secondary">
                          Status: {ticket.status} -{' '}
                          {dayjs(ticket.createdAt).format('MMMM D, YYYY')}
                        </Text>
                      </Card>
                    ),
                  }
                })}
              />
            ),
          },
        ]}
      />
    </PageLayout>
  )
}
