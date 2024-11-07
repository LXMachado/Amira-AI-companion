import {
  Typography,
  Form,
  Input,
  Select,
  Card,
  Row,
  Col,
  Button,
  message,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CompanionCustomizationPage() {
  const { user } = useUserContext()
  const [form] = Form.useForm()
  const [selectedTemplate, setSelectedTemplate] = useState<string>('')

  // Fetch existing companion if any
  const { data: companion, refetch } = Api.companion.findFirst.useQuery({
    where: { userId: user?.id },
  })

  // Mutation to create/update companion
  const { mutateAsync: updateCompanion } = Api.companion.update.useMutation()
  const { mutateAsync: createCompanion } = Api.companion.create.useMutation()

  // Mock data for templates and voices (in a real app, these would come from an API)
  const avatarTemplates = [
    { value: 'casual', label: 'Casual Style' },
    { value: 'professional', label: 'Professional Look' },
    { value: 'sporty', label: 'Sporty Outfit' },
  ]

  const voiceOptions = [
    { value: 'voice1', label: 'Soft and Gentle' },
    { value: 'voice2', label: 'Confident and Clear' },
    { value: 'voice3', label: 'Warm and Friendly' },
  ]

  const handleSubmit = async (values: any) => {
    try {
      if (companion) {
        await updateCompanion({
          where: { id: companion.id },
          data: {
            name: values.name,
            voiceId: values.voiceId,
            personalityTraits: values.personalityTraits,
            interests: values.interests,
            avatarTemplate: values.avatarTemplate,
          },
        })
      } else {
        await createCompanion({
          data: {
            name: values.name,
            voiceId: values.voiceId,
            personalityTraits: values.personalityTraits,
            interests: values.interests,
            avatarTemplate: values.avatarTemplate,
            userId: user?.id || '',
          },
        })
      }
      message.success('Companion settings saved successfully!')
      refetch()
    } catch (error) {
      message.error('Failed to save companion settings')
    }
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ padding: '24px' }}>
        <Title level={2} style={{ textAlign: 'center' }}>
          <i className="las la-robot" style={{ marginRight: '8px' }}></i>
          Customize Your AI Companion
        </Title>
        <Text
          style={{
            display: 'block',
            textAlign: 'center',
            marginBottom: '24px',
          }}
        >
          Personalize your AI companion's appearance, voice, and personality to
          create your perfect virtual friend.
        </Text>

        <Card>
          <Form
            form={form}
            layout="vertical"
            initialValues={companion || {}}
            onFinish={handleSubmit}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <Form.Item
                  name="name"
                  label="Companion Name"
                  rules={[{ required: true, message: 'Please enter a name' }]}
                >
                  <Input
                    prefix={<i className="las la-signature"></i>}
                    placeholder="Enter name"
                  />
                </Form.Item>

                <Form.Item
                  name="avatarTemplate"
                  label="Appearance Template"
                  rules={[
                    { required: true, message: 'Please select a template' },
                  ]}
                >
                  <Select
                    options={avatarTemplates}
                    placeholder="Select appearance template"
                    onChange={value => setSelectedTemplate(value)}
                  />
                </Form.Item>

                <Form.Item
                  name="voiceId"
                  label="Voice Selection"
                  rules={[{ required: true, message: 'Please select a voice' }]}
                >
                  <Select options={voiceOptions} placeholder="Select voice" />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  name="personalityTraits"
                  label="Personality Traits"
                  rules={[
                    {
                      required: true,
                      message: 'Please describe personality traits',
                    },
                  ]}
                >
                  <Input.TextArea
                    placeholder="Describe your companion's personality traits"
                    rows={4}
                  />
                </Form.Item>

                <Form.Item
                  name="interests"
                  label="Interests & Topics"
                  rules={[
                    { required: true, message: 'Please enter interests' },
                  ]}
                >
                  <Input.TextArea
                    placeholder="Enter preferred conversation topics and interests"
                    rows={4}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item style={{ textAlign: 'center', marginTop: '16px' }}>
              <Button
                type="primary"
                htmlType="submit"
                icon={<i className="las la-save"></i>}
              >
                Save Companion Settings
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </PageLayout>
  )
}
