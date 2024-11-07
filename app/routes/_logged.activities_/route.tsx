import {
  Typography,
  Card,
  Row,
  Col,
  Statistic,
  Button,
  List,
  Badge,
  Space,
  Progress,
} from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ActivitiesHubPage() {
  const navigate = useNavigate()
  const { user } = useUserContext()

  // Fetch user's activities and achievements
  const { data: activities } = Api.activity.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { createdAt: 'desc' },
  })

  const { data: achievements } = Api.achievement.findMany.useQuery({
    where: { userId: user?.id },
  })

  // Calculate streak from activities
  const currentStreak =
    activities?.filter(a =>
      dayjs(a.createdAt).isAfter(dayjs().subtract(1, 'day')),
    ).length || 0

  const games = [
    {
      title: 'Memory Match',
      icon: 'brain',
      description: 'Test your memory skills',
    },
    {
      title: 'Word Puzzle',
      icon: 'puzzle-piece',
      description: 'Expand your vocabulary',
    },
    {
      title: 'Quick Math',
      icon: 'calculator',
      description: 'Sharpen your math skills',
    },
    {
      title: 'Trivia Challenge',
      icon: 'question-circle',
      description: 'Test your knowledge',
    },
  ]

  const { mutateAsync: createActivity } = Api.activity.create.useMutation()

  const startGame = (gameTitle: string) => {
    createActivity({
      data: {
        type: gameTitle,
        status: 'IN_PROGRESS',
        userId: user?.id as string,
      },
    })
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>
        <i className="las la-gamepad"></i> Activities Hub
      </Title>
      <Text>
        Play games, track progress, and earn achievements with your AI
        companion!
      </Text>

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} sm={12}>
          <Card>
            <Statistic
              title="Current Streak"
              value={currentStreak}
              prefix={<i className="las la-fire"></i>}
              suffix="days"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card>
            <Statistic
              title="Total Achievements"
              value={achievements?.length || 0}
              prefix={<i className="las la-trophy"></i>}
            />
          </Card>
        </Col>
      </Row>

      <Title level={3} style={{ marginTop: 24 }}>
        <i className="las la-dice"></i> Available Games
      </Title>
      <Row gutter={[16, 16]}>
        {games.map(game => (
          <Col xs={24} sm={12} key={game.title}>
            <Card hoverable>
              <Space direction="vertical" style={{ width: '100%' }}>
                <i className={`las la-${game.icon} fa-2x`}></i>
                <Title level={4}>{game.title}</Title>
                <Text>{game.description}</Text>
                <Button type="primary" onClick={() => startGame(game.title)}>
                  Play Now
                </Button>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      <Title level={3} style={{ marginTop: 24 }}>
        <i className="las la-history"></i> Recent Activity
      </Title>
      <List
        dataSource={activities?.slice(0, 5)}
        renderItem={activity => (
          <List.Item>
            <Card style={{ width: '100%' }}>
              <Space>
                <Badge
                  status={
                    activity.status === 'COMPLETED' ? 'success' : 'processing'
                  }
                />
                <Text strong>{activity.type}</Text>
                <Text type="secondary">
                  {dayjs(activity.createdAt).format('MMM D, YYYY HH:mm')}
                </Text>
                {activity.score && (
                  <Text>Score: {activity.score.toString()}</Text>
                )}
              </Space>
            </Card>
          </List.Item>
        )}
      />

      <Title level={3} style={{ marginTop: 24 }}>
        <i className="las la-award"></i> Achievements
      </Title>
      <List
        grid={{ gutter: 16, xs: 1, sm: 2 }}
        dataSource={achievements}
        renderItem={achievement => (
          <List.Item>
            <Card>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Text strong>{achievement.type}</Text>
                <Progress
                  percent={achievement.progress || 0}
                  status={
                    achievement.status === 'COMPLETED' ? 'success' : 'active'
                  }
                />
              </Space>
            </Card>
          </List.Item>
        )}
      />
    </PageLayout>
  )
}
