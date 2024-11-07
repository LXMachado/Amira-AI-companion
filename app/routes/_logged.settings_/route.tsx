import {
  Typography,
  Form,
  Switch,
  Select,
  InputNumber,
  Card,
  Row,
  Col,
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

export default function SettingsPage() {
  const { user } = useUserContext()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const { mutateAsync: updateUser } = Api.user.update.useMutation()

  const onFinish = async (values: any) => {
    try {
      setLoading(true)
      await updateUser({
        where: { id: user?.id },
        data: {
          // Store settings in the user model
          privacySettings: JSON.stringify(values.privacy),
          securityPreferences: JSON.stringify(values.security),
          conversationRetention: values.retention,
          notificationPreferences: JSON.stringify(values.notifications),
          interests: JSON.stringify(values.interests),
        },
      })
      message.success('Settings updated successfully')
    } catch (error) {
      message.error('Failed to update settings')
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ padding: '24px' }}>
        <Title level={2}>
          <i className="las la-cog" style={{ marginRight: '8px' }}></i>
          Settings
        </Title>
        <Text type="secondary">
          Customize your experience by adjusting your privacy, security, and
          notification preferences
        </Text>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          style={{ marginTop: '24px' }}
          disabled={loading}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card
                title={
                  <>
                    <i className="las la-user-shield"></i> Privacy & Security
                  </>
                }
              >
                <Form.Item
                  label="Profile Visibility"
                  name={['privacy', 'profileVisibility']}
                >
                  <Select>
                    <Select.Option value="public">Public</Select.Option>
                    <Select.Option value="friends">Friends Only</Select.Option>
                    <Select.Option value="private">Private</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Two-Factor Authentication"
                  name={['security', 'twoFactor']}
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card
                title={
                  <>
                    <i className="las la-history"></i> Conversation Settings
                  </>
                }
              >
                <Form.Item
                  label="Conversation Retention (days)"
                  name="retention"
                >
                  <InputNumber min={1} max={365} style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                  label="Auto-Delete Old Conversations"
                  name={['privacy', 'autoDelete']}
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card
                title={
                  <>
                    <i className="las la-bell"></i> Notifications
                  </>
                }
              >
                <Form.Item
                  label="Email Notifications"
                  name={['notifications', 'email']}
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>

                <Form.Item
                  label="Push Notifications"
                  name={['notifications', 'push']}
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>

                <Form.Item
                  label="Daily Digest"
                  name={['notifications', 'digest']}
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card
                title={
                  <>
                    <i className="las la-heart"></i> Personal Preferences
                  </>
                }
              >
                <Form.Item
                  label="Interests"
                  name={['interests', 'topics']}
                >
                  <Select mode="multiple">
                    <Select.Option value="technology">Technology</Select.Option>
                    <Select.Option value="arts">Arts</Select.Option>
                    <Select.Option value="sports">Sports</Select.Option>
                    <Select.Option value="music">Music</Select.Option>
                    <Select.Option value="travel">Travel</Select.Option>
                    <Select.Option value="food">Food</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Language Preference"
                  name={['interests', 'language']}
                >
                  <Select>
                    <Select.Option value="en">English</Select.Option>
                    <Select.Option value="es">Spanish</Select.Option>
                    <Select.Option value="fr">French</Select.Option>
                  </Select>
                </Form.Item>
              </Card>
            </Col>
          </Row>

          <Form.Item style={{ marginTop: '24px', textAlign: 'right' }}>
            <button
              type="submit"
              className="ant-btn ant-btn-primary"
              disabled={loading}
            >
              <i className="las la-save"></i> Save Settings
            </button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
