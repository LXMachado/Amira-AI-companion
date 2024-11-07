import {
  Typography,
  Card,
  Rate,
  Input,
  Button,
  Timeline,
  Tabs,
  Modal,
  Statistic,
  Row,
  Col,
  Space,
  Select,
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

export default function MemoryBankReflectionMoodTrackingPage() {
  const { user } = useUserContext()
  const [newMemory, setNewMemory] = useState('')
  const [moodRating, setMoodRating] = useState(3)
  const [privacyLevel, setPrivacyLevel] = useState(1)
  const [selectedMemory, setSelectedMemory] = useState<string | null>(null)

  const { data: memories, refetch } = Api.memory.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { createdAt: 'desc' },
  })

  const { data: notifications } = Api.notification.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { createdAt: 'desc' },
    take: 5,
  })

  const { mutateAsync: createMemory } = Api.memory.create.useMutation()
  const { mutateAsync: deleteMemory } = Api.memory.delete.useMutation()

  const handleCreateMemory = async () => {
    if (!newMemory || !user?.id) return

    await createMemory({
      data: {
        content: newMemory,
        moodRating,
        privacyLevel,
        userId: user.id,
        type: 'reflection',
      },
    })
    setNewMemory('')
    refetch()
  }

  const handleDeleteMemory = async (id: string) => {
    await deleteMemory({ where: { id } })
    refetch()
  }

  const getMoodColor = (rating: number) => {
    if (rating >= 4) return '#52c41a'
    if (rating >= 2.5) return '#faad14'
    return '#f5222d'
  }

  const averageMood =
    memories?.reduce((acc, mem) => acc + (mem.moodRating || 0), 0) /
    (memories?.length || 1)

  return (
    <PageLayout layout="narrow">
      <Title level={2}>
        <i className="las la-memory"></i> Memory Bank & Mood Tracking
      </Title>
      <Paragraph>
        Track your emotional journey and preserve important memories with your
        AI companion.
      </Paragraph>

      <Tabs defaultActiveKey="1">
        <Tabs.TabPane
          tab={
            <span>
              <i className="las la-plus-circle"></i> New Entry
            </span>
          }
          key="1"
        >
          <Card>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Text strong>How are you feeling today?</Text>
              <Rate
                value={moodRating}
                onChange={setMoodRating}
                character={<i className="las la-smile"></i>}
              />

              <TextArea
                rows={4}
                value={newMemory}
                onChange={e => setNewMemory(e.target.value)}
                placeholder="Write your reflection or memory..."
              />

              <Select
                value={privacyLevel}
                onChange={setPrivacyLevel}
                style={{ width: 200 }}
              >
                <Select.Option value={1}>
                  <i className="las la-lock-open"></i> Public
                </Select.Option>
                <Select.Option value={2}>
                  <i className="las la-user-friends"></i> Friends Only
                </Select.Option>
                <Select.Option value={3}>
                  <i className="las la-lock"></i> Private
                </Select.Option>
              </Select>

              <Button type="primary" onClick={handleCreateMemory}>
                <i className="las la-save"></i> Save Memory
              </Button>
            </Space>
          </Card>
        </Tabs.TabPane>

        <Tabs.TabPane
          tab={
            <span>
              <i className="las la-chart-line"></i> Mood Analytics
            </span>
          }
          key="2"
        >
          <Row gutter={16}>
            <Col span={8}>
              <Card>
                <Statistic
                  title="Average Mood"
                  value={averageMood.toFixed(1)}
                  prefix={
                    <i
                      className="las la-smile"
                      style={{ color: getMoodColor(averageMood) }}
                    ></i>
                  }
                />
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Recent Notifications">
                <Timeline>
                  {notifications?.map(notification => (
                    <Timeline.Item key={notification.id}>
                      <Text>{notification.content}</Text>
                      <br />
                      <Text type="secondary">
                        {dayjs(notification.createdAt).format('MMM D, YYYY')}
                      </Text>
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Card>
            </Col>
          </Row>
        </Tabs.TabPane>

        <Tabs.TabPane
          tab={
            <span>
              <i className="las la-book"></i> Memory Timeline
            </span>
          }
          key="3"
        >
          <Timeline mode="left">
            {memories?.map(memory => (
              <Timeline.Item key={memory.id}>
                <Card
                  title={
                    <Space>
                      <Rate
                        disabled
                        value={memory.moodRating || 0}
                        character={<i className="las la-smile"></i>}
                      />
                      <Text type="secondary">
                        {dayjs(memory.createdAt).format('MMM D, YYYY')}
                      </Text>
                    </Space>
                  }
                  extra={
                    <Button
                      danger
                      onClick={() => handleDeleteMemory(memory.id)}
                    >
                      <i className="las la-trash"></i>
                    </Button>
                  }
                >
                  <Paragraph>{memory.content}</Paragraph>
                  <Text type="secondary">
                    Privacy Level:{' '}
                    {memory.privacyLevel === 3
                      ? 'Private'
                      : memory.privacyLevel === 2
                      ? 'Friends Only'
                      : 'Public'}
                  </Text>
                </Card>
              </Timeline.Item>
            ))}
          </Timeline>
        </Tabs.TabPane>
      </Tabs>

      <Modal
        title="Memory Details"
        open={!!selectedMemory}
        onCancel={() => setSelectedMemory(null)}
        footer={null}
      >
        {selectedMemory && (
          <Card>
            <Paragraph>{selectedMemory}</Paragraph>
          </Card>
        )}
      </Modal>
    </PageLayout>
  )
}
