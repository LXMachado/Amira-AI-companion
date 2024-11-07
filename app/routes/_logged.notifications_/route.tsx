import {
  Typography,
  Tabs,
  List,
  Button,
  Progress,
  Card,
  Badge,
  message,
  Space,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AchievementsandNotificationCenterPage() {
  const { user } = useUserContext()
  const [activeTab, setActiveTab] = useState('1')

  // Fetch notifications
  const { data: notifications, refetch: refetchNotifications } =
    Api.notification.findMany.useQuery({
      where: { userId: user?.id },
      orderBy: { createdAt: 'desc' },
    })

  // Fetch achievements
  const { data: achievements } = Api.achievement.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { createdAt: 'desc' },
  })

  // Mutations
  const { mutateAsync: updateNotification } =
    Api.notification.update.useMutation()
  const { mutateAsync: deleteNotification } =
    Api.notification.delete.useMutation()

  const handleMarkAsRead = async (notificationId: string) => {
    try {
      await updateNotification({
        where: { id: notificationId },
        data: { status: 'READ' },
      })
      await refetchNotifications()
      message.success('Notification marked as read')
    } catch (error) {
      message.error('Failed to mark notification as read')
    }
  }

  const handleDeleteNotification = async (notificationId: string) => {
    try {
      await deleteNotification({
        where: { id: notificationId },
      })
      await refetchNotifications()
      message.success('Notification deleted')
    } catch (error) {
      message.error('Failed to delete notification')
    }
  }

  const getAchievementColor = (progress: number | null | undefined) => {
    if (!progress) return '#f5222d'
    if (progress < 50) return '#faad14'
    if (progress < 100) return '#1890ff'
    return '#52c41a'
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ padding: '24px' }}>
        <Title level={2}>
          <i className="las la-bell" style={{ marginRight: '8px' }}></i>
          Achievements & Notifications
        </Title>
        <Text type="secondary">
          Track your progress and stay updated with your AI companion's
          activities
        </Text>

        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          style={{ marginTop: '24px' }}
          items={[
            {
              key: '1',
              label: (
                <span>
                  <i className="las la-bell"></i> Notifications
                </span>
              ),
              children: (
                <List
                  dataSource={notifications}
                  renderItem={notification => (
                    <List.Item
                      actions={[
                        <Button
                          key="read"
                          type="link"
                          onClick={() => handleMarkAsRead(notification.id)}
                          disabled={notification.status === 'READ'}
                        >
                          <i className="las la-check"></i> Mark as Read
                        </Button>,
                        <Button
                          key="delete"
                          type="link"
                          danger
                          onClick={() =>
                            handleDeleteNotification(notification.id)
                          }
                        >
                          <i className="las la-trash"></i> Delete
                        </Button>,
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          <Badge
                            status={
                              notification.status === 'READ'
                                ? 'default'
                                : 'processing'
                            }
                          />
                        }
                        title={notification.type}
                        description={
                          <Space direction="vertical">
                            <Text>{notification.content}</Text>
                            <Text type="secondary">
                              {dayjs(notification.createdAt).format(
                                'MMMM D, YYYY h:mm A',
                              )}
                            </Text>
                          </Space>
                        }
                      />
                    </List.Item>
                  )}
                />
              ),
            },
            {
              key: '2',
              label: (
                <span>
                  <i className="las la-trophy"></i> Achievements
                </span>
              ),
              children: (
                <div
                  style={{
                    display: 'grid',
                    gap: '16px',
                    gridTemplateColumns:
                      'repeat(auto-fill, minmax(300px, 1fr))',
                  }}
                >
                  {achievements?.map(achievement => (
                    <Card key={achievement.id}>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                          }}
                        >
                          <i
                            className="las la-medal"
                            style={{ fontSize: '24px' }}
                          ></i>
                          <Text strong>{achievement.type}</Text>
                        </div>
                        <Progress
                          percent={achievement.progress || 0}
                          status={
                            achievement.progress === 100 ? 'success' : 'active'
                          }
                          strokeColor={getAchievementColor(
                            achievement.progress,
                          )}
                        />
                        <Text type="secondary">
                          Status: {achievement.status || 'In Progress'}
                        </Text>
                      </Space>
                    </Card>
                  ))}
                </div>
              ),
            },
          ]}
        />
      </div>
    </PageLayout>
  )
}
