import {
  Typography,
  Card,
  Button,
  Row,
  Col,
  List,
  Tag,
  Spin,
  message,
} from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function InAppPurchaseUpgradePage() {
  const navigate = useNavigate()
  const { user } = useUserContext()

  // Move hooks to root level
  const productsQuery = Api.billing.findManyProducts.useQuery({})
  const subscriptionsQuery = Api.billing.findManySubscriptions.useQuery({})
  const purchasesQuery = Api.purchase.findMany.useQuery({
    where: { userId: user?.id },
  })
  const createPaymentLinkMutation = Api.billing.createPaymentLink.useMutation()

  const products = productsQuery.data
  const subscriptions = subscriptionsQuery.data
  const purchases = purchasesQuery.data
  const productsLoading = productsQuery.isLoading
  const subscriptionsLoading = subscriptionsQuery.isLoading

  const handlePurchase = async (productId: string) => {
    try {
      const response = await createPaymentLinkMutation.mutateAsync({ productId })
      window.location.href = response.url
    } catch (error) {
      message.error('Failed to process purchase. Please try again.')
    }
  }

  if (productsLoading || subscriptionsLoading) {
    return (
      <PageLayout layout="narrow">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ padding: '24px' }}>
        <Title level={2} style={{ textAlign: 'center' }}>
          <i className="las la-crown" style={{ color: '#FFD700' }}></i> Premium
          Features & Add-ons
        </Title>
        <Paragraph style={{ textAlign: 'center', marginBottom: '40px' }}>
          Enhance your AI companion experience with premium features and
          exclusive add-ons
        </Paragraph>

        {/* Premium Subscriptions */}
        <Title level={3}>
          <i className="las la-star"></i> Premium Subscriptions
        </Title>
        <Row gutter={[16, 16]} style={{ marginBottom: '40px' }}>
          {subscriptions?.map(subscription => (
            <Col xs={24} sm={12} md={8} key={subscription.productId}>
              <Card
                title={subscription.productId}
                bordered
                style={{ height: '100%' }}
                actions={[
                  <Button
                    type="primary"
                    onClick={() => handlePurchase(subscription.productId)}
                    key="subscribe"
                  >
                    Subscribe until {subscription.dateExpired}
                  </Button> as React.ReactNode,
                ]}
              >
                <List
                  size="small"
                  dataSource={[subscription.status]}
                  renderItem={feature => (
                    <List.Item>
                      <i
                        className="las la-check"
                        style={{ color: '#52c41a', marginRight: '8px' }}
                      ></i>
                      {feature}
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          ))}
        </Row>

        {/* One-time Purchases */}
        <Title level={3}>
          <i className="las la-shopping-cart"></i> One-time Add-ons
        </Title>
        <Row gutter={[16, 16]} style={{ marginBottom: '40px' }}>
          {products?.map(product => (
            <Col xs={24} sm={12} md={8} key={product.id}>
              <Card
                title={product.name}
                bordered
                style={{ height: '100%' }}
                extra={<Tag color="blue">${product.price}</Tag>}
                actions={[
                  <Button
                    type="primary"
                    onClick={() => handlePurchase(product.id)}
                    key="purchase"
                  >
                    Purchase Now
                  </Button>,
                ]}
              >
                <Paragraph>{product.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Purchase History */}
        <Title level={3}>
          <i className="las la-history"></i> Purchase History
        </Title>
        <Card>
          <List
            dataSource={purchases}
            renderItem={purchase => (
              <List.Item extra={<Tag color="green">${purchase.amount}</Tag>}>
                <List.Item.Meta
                  title={purchase.itemType}
                  description={`Status: ${purchase.status} - ${purchase.createdAt}`}
                />
              </List.Item>
            )}
            locale={{ emptyText: 'No purchase history' }}
          />
        </Card>
      </div>
    </PageLayout>
  )
}
