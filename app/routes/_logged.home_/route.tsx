import {
  Typography,
  Card,
  Row,
  Col,
  Button,
  Progress,
  List,
  Avatar,
} from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const { user } = useUserContext()

  // Fetch companion data
  const { data: companion } = Api.companion.findFirst.useQuery({
    where: { userId: user?.id },
    orderBy: { updatedAt: 'desc' },
  })

  // Fetch latest conversation
  const { data: latestConversation } = Api.conversation.findFirst.useQuery({
    where: { userId: user?.id },
    include: { messages: true },
    orderBy: { updatedAt: 'desc' },
  })

  // Fetch upcoming activities
  const { data: activities } = Api.activity.findMany.useQuery({
    where: { userId: user?.id, status: 'PENDING' },
    orderBy: { createdAt: 'desc' },
    take: 3,
  })

  return (
    <PageLayout layout="narrow">
      <div style={{ padding: '24px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>
          Welcome Back to Your AI Companion
        </Title>
        <Text
          style={{
            display: 'block',
            textAlign: 'center',
            marginBottom: '32px',
          }}
        >
          Connect, chat, and grow with your personal AI companion
        </Text>

        <Row gutter={[24, 24]}>
          {/* Companion Card */}
          <Col xs={24} md={12}>
            <Card>
              <div style={{ textAlign: 'center' }}>
                <Avatar
                  size={120}
                  src={
                    companion?.avatarTemplate ||
                    'https://i.imgur.com/ZdJSK3Y.jpeg'
                  }
                />
                <Title level={3} style={{ marginTop: '16px' }}>
                  {companion?.name || 'Your Companion'}
                </Title>
                <Progress
                  percent={Math.round(
                    (companion?.relationshipLevel || 0) * 100,
                  )}
                  status="active"
                  format={() => 'Relationship Level'}
                />
                <Button
                  type="primary"
                  icon={<i className="las la-comments" />}
                  onClick={() => navigate('/chat')}
                  style={{ marginTop: '16px' }}
                >
                  Start New Chat
                </Button>
              </div>
            </Card>
          </Col>

          {/* Latest Interaction */}
          <Col xs={24} md={12}>
            <Card
              title={
                <span>
                  <i className="las la-history" /> Recent Interactions
                </span>
              }
            >
              {latestConversation?.messages ? (
                <List
                  itemLayout="horizontal"
                  dataSource={latestConversation.messages.slice(-3)}
                  renderItem={message => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            src={
                              message.sender === 'AI'
                                ? companion?.avatarTemplate
                                : user?.pictureUrl
                            }
                          />
                        }
                        title={message.sender}
                        description={message.content}
                      />
                      <Text type="secondary">
                        {dayjs(message.createdAt).format('HH:mm')}
                      </Text>
                    </List.Item>
                  )}
                />
              ) : (
                <Text>No recent conversations</Text>
              )}
            </Card>
          </Col>

          {/* Quick Actions */}
          <Col xs={24}>
            <Card
              title={
                <span>
                  <i className="las la-star" /> Daily Activities
                </span>
              }
            >
              <Row gutter={[16, 16]}>
                <Col xs={12} sm={6}>
                  <Button
                    block
                    icon={<i className="las la-calendar-check" />}
                    onClick={() => navigate('/activities')}
                  >
                    Daily Check-in
                  </Button>
                </Col>
                <Col xs={12} sm={6}>
                  <Button
                    block
                    icon={<i className="las la-gamepad" />}
                    onClick={() => navigate('/activities')}
                  >
                    Mini-Games
                  </Button>
                </Col>
                <Col xs={12} sm={6}>
                  <Button
                    block
                    icon={<i className="las la-heart" />}
                    onClick={() => navigate('/virtual-date')}
                  >
                    Virtual Date
                  </Button>
                </Col>
                <Col xs={12} sm={6}>
                  <Button
                    block
                    icon={<i className="las la-book" />}
                    onClick={() => navigate('/memories')}
                  >
                    Memory Bank
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
