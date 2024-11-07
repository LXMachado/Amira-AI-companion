import {
  Typography,
  Card,
  Button,
  Modal,
  message,
  Row,
  Col,
  Tag,
  Spin,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AvatarWardrobeCustomizationShopPage() {
  const { user } = useUserContext()
  const [previewItem, setPreviewItem] = useState<any>(null)
  const [previewVisible, setPreviewVisible] = useState(false)

  // Fetch available items
  const { data: items, isLoading } = Api.purchase.findMany.useQuery({
    where: {
      itemType: 'AVATAR_ITEM',
    },
    include: {
      user: true,
    },
  })

  // Fetch user achievements to check for unlockables
  const { data: achievements } = Api.achievement.findMany.useQuery({
    where: {
      userId: user?.id,
      status: 'COMPLETED',
    },
  })

  // Purchase mutation
  const { mutateAsync: createPurchase } = Api.purchase.create.useMutation()

  const handlePurchase = async (item: any) => {
    try {
      await createPurchase({
        data: {
          itemType: 'AVATAR_ITEM',
          itemId: item.id,
          status: 'COMPLETED',
          amount: item.amount,
          userId: user?.id as string,
        },
      })
      message.success('Item purchased successfully!')
    } catch (error) {
      message.error('Failed to purchase item')
    }
  }

  const handlePreview = (item: any) => {
    setPreviewItem(item)
    setPreviewVisible(true)
  }

  if (isLoading) {
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
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Title level={2}>
            <i className="las la-tshirt" style={{ marginRight: '8px' }}></i>
            Avatar Wardrobe Shop
          </Title>
          <Text>
            Customize your AI companion's appearance with our collection of
            outfits and items
          </Text>
        </div>

        <Row gutter={[16, 16]}>
          {items?.map(item => (
            <Col xs={24} sm={12} md={8} key={item.id}>
              <Card
                hoverable
                cover={
                  <div
                    style={{
                      height: 200,
                      background: '#f0f2f5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <i
                      className="las la-image"
                      style={{ fontSize: '48px', color: '#999' }}
                    ></i>
                  </div>
                }
                actions={[
                  <Button
                    key="preview"
                    onClick={() => handlePreview(item)}
                    icon={<i className="las la-eye" />}
                  >
                    Preview
                  </Button>,
                  <Button
                    key="purchase"
                    type="primary"
                    onClick={() => handlePurchase(item)}
                    icon={<i className="las la-shopping-cart" />}
                  >
                    Purchase
                  </Button>,
                ]}
              >
                <Card.Meta
                  title={item.itemId}
                  description={
                    <>
                      <Text>${item.amount}</Text>
                      <br />
                      {achievements?.some(
                        a => a.type === `UNLOCK_${item.itemId}`,
                      ) && (
                        <Tag color="green">
                          <i className="las la-unlock" /> Unlocked
                        </Tag>
                      )}
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>

        <Modal
          title="Item Preview"
          open={previewVisible}
          onCancel={() => setPreviewVisible(false)}
          footer={[
            <Button key="close" onClick={() => setPreviewVisible(false)}>
              Close
            </Button>,
            <Button
              key="purchase"
              type="primary"
              onClick={() => handlePurchase(previewItem)}
            >
              Purchase
            </Button>,
          ]}
        >
          {previewItem && (
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  height: 300,
                  background: '#f0f2f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <i
                  className="las la-image"
                  style={{ fontSize: '64px', color: '#999' }}
                ></i>
              </div>
              <Title level={4}>{previewItem.itemId}</Title>
              <Text>${previewItem.amount}</Text>
            </div>
          )}
        </Modal>
      </div>
    </PageLayout>
  )
}
