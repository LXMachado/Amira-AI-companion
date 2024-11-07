import { useState } from 'react'
import {
  Typography,
  Form,
  Input,
  Button,
  Rate,
  Radio,
  Card,
  message,
  Space,
} from 'antd'
import type { RadioChangeEvent } from 'antd'
const { Title, Text, Paragraph } = Typography
const { TextArea } = Input
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function FeedbackSuggestionsPage() {
  const { user } = useUserContext()
  const [feedbackType, setFeedbackType] = useState<string>('feedback')
  const [form] = Form.useForm()

  const { mutateAsync: createActivity } = Api.activity.create.useMutation()

  const handleSubmit = async (values: any) => {
    try {
      if (!user?.id) return

      await createActivity({
        data: {
          type: feedbackType,
          score: values.rating,
          status: 'SUBMITTED',
          content: values.content,
          userId: user.id,
        },
      })

      message.success('Thank you for your submission!')
      form.resetFields()
    } catch (error) {
      message.error('Something went wrong. Please try again.')
    }
  }

  const handleTypeChange = (e: RadioChangeEvent) => {
    setFeedbackType(e.target.value)
    form.resetFields()
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <Title level={2}>
          <i className="las la-comment-dots"></i> Feedback & Suggestions
        </Title>
        <Paragraph>
          Help us improve your experience by sharing your thoughts and ideas
        </Paragraph>
      </div>

      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Text strong>What would you like to share with us?</Text>
            <Radio.Group
              value={feedbackType}
              onChange={handleTypeChange}
              style={{ marginTop: 16, display: 'flex', gap: 16 }}
            >
              <Radio.Button value="feedback">
                <i className="las la-comment"></i> General Feedback
              </Radio.Button>
              <Radio.Button value="feature">
                <i className="las la-lightbulb"></i> Feature Suggestion
              </Radio.Button>
              <Radio.Button value="survey">
                <i className="las la-poll"></i> Quick Survey
              </Radio.Button>
            </Radio.Group>
          </div>

          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            {feedbackType === 'feedback' && (
              <>
                <Form.Item
                  name="rating"
                  label="How would you rate your overall experience?"
                  rules={[
                    { required: true, message: 'Please rate your experience' },
                  ]}
                >
                  <Rate />
                </Form.Item>
                <Form.Item
                  name="content"
                  label="Tell us about your experience"
                  rules={[
                    { required: true, message: 'Please share your feedback' },
                  ]}
                >
                  <TextArea
                    rows={4}
                    placeholder="What did you like? What could be improved?"
                  />
                </Form.Item>
              </>
            )}

            {feedbackType === 'feature' && (
              <>
                <Form.Item
                  name="content"
                  label="Describe your feature suggestion"
                  rules={[
                    {
                      required: true,
                      message: 'Please describe your feature suggestion',
                    },
                  ]}
                >
                  <TextArea
                    rows={4}
                    placeholder="What new feature would you like to see?"
                  />
                </Form.Item>
              </>
            )}

            {feedbackType === 'survey' && (
              <>
                <Form.Item
                  name="content"
                  label="Which upcoming feature interests you the most?"
                  rules={[
                    { required: true, message: 'Please select an option' },
                  ]}
                >
                  <Radio.Group>
                    <Space direction="vertical">
                      <Radio value="voice">Enhanced Voice Interactions</Radio>
                      <Radio value="activities">New Activities & Games</Radio>
                      <Radio value="customization">
                        More Customization Options
                      </Radio>
                      <Radio value="social">Social Features</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </>
            )}

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                icon={<i className="las la-paper-plane"></i>}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </Card>
    </PageLayout>
  )
}
