// core components
import { useEffect, useRef, createRef } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
// chakra imports
import { Box, Portal } from '@chakra-ui/react'

import Footer from 'components/Footer/Footer'
import AuthNavbar from 'components/Navbars/AuthNavbar'

import routes from 'routes'
import { AdminRoute, DashboardRoutes } from 'types'

const AuthContainer = () => {
  // ref for the wrapper div
  const wrapper = createRef<HTMLDivElement>()

  useEffect(() => {
    document.body.style.overflow = 'unset'
    // Specify how to clean up after this effect:
    return function cleanup() {}
  })

  // this renders the nested routes in /auth/*
  const getRoutes = (routes: DashboardRoutes) => {
    return routes.map((prop: AdminRoute) => {
      if (prop.layout === '/auth') {
        return (
          <Route path={prop.path} element={prop.component} key={prop.path} />
        )
      }
      return null
    })
  }
  const navRef = useRef(null)
  document.documentElement.dir = 'ltr'

  return (
    <Box ref={navRef} w="100%">
      <Portal containerRef={navRef}>
        <AuthNavbar logoText="AWESOME Admin Panel" />
      </Portal>
      <Box w="100%">
        <Box ref={wrapper} w="100%">
          <Routes>
            {getRoutes(routes)}
            <Route path="/" element={<Navigate to="signin" replace />} />
          </Routes>
        </Box>
      </Box>
      <Box px="24px" mx="auto" width="1044px" maxW="100%">
        <Footer />
      </Box>
    </Box>
  )
}

export default AuthContainer
