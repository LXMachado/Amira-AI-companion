// import { useUserContext } from '@/core/context'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { Flex } from 'antd'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Mobilebar } from './components/Mobilebar'
import { Topbar } from './components/Topbar'
import { NavigationItem } from './types'
import { useUserContext } from '~/core/context'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useNavigate()
  const pathname = useLocation().pathname
  const params: Record<string, string> = useParams()

  const goTo = (url: string) => {
    router(url)
  }

  const items: NavigationItem[] = [
    {
      key: '/home',
      label: 'Home Page',
      position: 'topbar',

      onClick: () => goTo('/home'),
    },

    {
      key: '/companion/customize',
      label: 'Companion Customization',
      position: 'topbar',

      onClick: () => goTo('/companion/customize'),
    },

    {
      key: '/chat',
      label: 'Chat Room',
      position: 'topbar',

      onClick: () => goTo('/chat'),
    },

    {
      key: '/virtual-date',
      label: 'Virtual Date',
      position: 'topbar',

      onClick: () => goTo('/virtual-date'),
    },

    {
      key: '/memories',
      label: 'Memory Bank, Reflection & Mood Tracking',
      position: 'topbar',

      onClick: () => goTo('/memories'),
    },

    {
      key: '/activities',
      label: 'Activities Hub',
      position: 'topbar',

      onClick: () => goTo('/activities'),
    },

    {
      key: '/settings',
      label: 'Settings',
      position: 'topbar',

      onClick: () => goTo('/settings'),
    },

    {
      key: '/notifications',
      label: 'Achievements and Notification Center',
      position: 'topbar',

      onClick: () => goTo('/notifications'),
    },

    {
      key: '/Support',
      label: 'Support & FAQs',
      position: 'topbar',

      onClick: () => goTo('/Support'),
    },

    {
      key: '/Upgrade',
      label: 'In-App Purchase & Upgrade',
      position: 'topbar',

      onClick: () => goTo('/Upgrade'),
    },

    {
      key: '/Wardrobe',
      label: 'Avatar Wardrobe & Customization Shop',
      position: 'topbar',

      onClick: () => goTo('/Wardrobe'),
    },

    {
      key: '/Feedback',
      label: 'Feedback & Suggestions',
      position: 'topbar',

      onClick: () => goTo('/Feedback'),
    },

    {
      key: '/pricing',
      label: 'Pricing',

      position: 'topbar',

      onClick: () => goTo('/pricing'),
    },
  ]

  const itemsVisible = items
    .filter(item => item.isVisible !== false)
    .map(item => ({
      key: item.key,
      label: item.label,
      position: item.position,
      onClick: item.onClick,
    }))

  const itemsTopbar = itemsVisible.filter(item => item.position === 'topbar')

  const itemsLeftbar = itemsVisible.filter(item => item.position === 'leftbar')

  const itemsLeftbottom = itemsVisible.filter(
    item => item.position === 'leftbar-bottom',
  )

  const itemsMobile = itemsVisible

  let keySelected = pathname

  Object.entries(params).forEach(([key, value]) => {
    keySelected = keySelected.replace(`/${value}`, `/:${key}`)
  })

  return (
    <>
      <Topbar keySelected={keySelected} items={itemsTopbar} />

      <Mobilebar keySelected={keySelected} items={itemsMobile} />

      <Flex flex={1} style={{ overflowY: 'hidden' }}>
        <Leftbar
          keySelected={keySelected}
          items={itemsLeftbar}
          itemsBottom={itemsLeftbottom}
        />

        <Flex flex={1} vertical style={{ overflowY: 'hidden' }}>
          {children}
        </Flex>
      </Flex>
    </>
  )
}
