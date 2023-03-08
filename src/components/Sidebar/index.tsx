// chakra imports
import { useRef } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

import { DashboardRoutes } from 'types'

import SidebarContent from './SidebarContent'

interface SidebarProps {
  routes: DashboardRoutes
  logoText: string
  sidebarVariant: string
}

const Sidebar = (props: SidebarProps) => {
  // to check for active links and opened collapses
  const mainPanel = useRef(null)
  const variantChange = '0.2s linear'

  const { logoText, routes, sidebarVariant } = props

  //  BRAND
  //  Chakra Color Mode
  const sidebarBg = 'none'
  const sidebarRadius = '0px'
  const sidebarMargins = '0px'

  const sidebarBgOpaque = useColorModeValue('white', 'gray.700')
  const sidebarRadiusOpaque = '16px'
  const sidebarMarginsOpaque = '16px 0px 16px 16px'

  // SIDEBAR
  return (
    <Box ref={mainPanel}>
      <Box display={{ sm: 'none', xl: 'block' }} position="fixed">
        <Box
          bg={sidebarVariant === 'opaque' ? sidebarBgOpaque : sidebarBg}
          transition={variantChange}
          w="260px"
          maxW="260px"
          ms={{
            sm: '16px'
          }}
          my={{
            sm: '16px'
          }}
          h="calc(100vh - 32px)"
          ps="20px"
          pe="20px"
          m={
            sidebarVariant === 'opaque' ? sidebarMarginsOpaque : sidebarMargins
          }
          borderRadius={
            sidebarVariant === 'opaque' ? sidebarRadiusOpaque : sidebarRadius
          }
        >
          <SidebarContent routes={routes} logoText={logoText} />
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
