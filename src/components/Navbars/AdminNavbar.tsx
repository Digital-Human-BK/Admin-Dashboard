import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// Chakra Imports
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Link,
  useColorModeValue
} from '@chakra-ui/react'

import AdminNavbarLinks from './AdminNavbarLinks'

interface AdminNavbarProps {
  fixed: boolean
  logoText: string
  onOpen: () => void
}

const AdminNavbar = ({ fixed, logoText, onOpen }: AdminNavbarProps) => {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const boxShadowValue = useColorModeValue(
    '0px 7px 23px rgba(0, 0, 0, 0.05)',
    'none'
  )
  const navbarBgValue = useColorModeValue(
    'linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)',
    'linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)'
  )
  const navbarBorderValue = useColorModeValue(
    '#FFFFFF',
    'rgba(255, 255, 255, 0.31)'
  )
  const navbarFilterValue = useColorModeValue(
    'none',
    'drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))'
  )

  const path = location.pathname.replace('/admin/', '')

  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  const mainText = useColorModeValue('gray.700', 'gray.200')
  const secondaryText = useColorModeValue('gray.400', 'gray.200')
  let navbarPosition: 'absolute' | 'fixed' = 'absolute'
  let navbarFilter = 'none'
  const navbarBackdrop = 'blur(21px)'
  let navbarShadow = 'none'
  let navbarBg = 'none'
  let navbarBorder = 'transparent'
  const secondaryMargin = '0px'
  const paddingX = '15px'
  if (fixed === true)
    if (scrolled === true) {
      navbarPosition = 'fixed'
      navbarShadow = boxShadowValue
      navbarBg = navbarBgValue
      navbarBorder = navbarBorderValue
      navbarFilter = navbarFilterValue
    }

  const changeNavbar = () => {
    if (window.scrollY < 1) {
      setScrolled(false)
    } else {
      setScrolled(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar)

    return () => window.removeEventListener('scroll', changeNavbar)
  }, [])

  return (
    <Flex
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      borderWidth="1.5px"
      borderStyle="solid"
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems={{ xl: 'center' }}
      borderRadius="16px"
      display="flex"
      minH="75px"
      justifyContent={{ xl: 'center' }}
      lineHeight="25.6px"
      mx="auto"
      mt={secondaryMargin}
      pb="8px"
      right="30px"
      px={{
        sm: paddingX,
        md: '30px'
      }}
      ps={{
        xl: '12px'
      }}
      pt="8px"
      top="18px"
      w={{ sm: 'calc(100% - 60px)', xl: 'calc(100% - 60px - 275px)' }}
    >
      <Flex
        w="100%"
        flexDirection={{
          sm: 'column',
          md: 'row'
        }}
        alignItems={{ xl: 'center' }}
      >
        <Box mb={{ sm: '8px', md: '0px' }}>
          <Breadcrumb>
            <BreadcrumbItem color={mainText}>
              <BreadcrumbLink href="#" color={secondaryText}>
                Pages
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color={mainText}>
              <BreadcrumbLink
                href={location.pathname}
                color={mainText}
                textTransform="capitalize"
              >
                {path}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          {/* Here we create navbar brand, based on route name */}
          <Link
            color={mainText}
            href={location.pathname}
            bg="inherit"
            borderRadius="inherit"
            fontWeight="bold"
            textTransform="capitalize"
            _hover={{ color: { mainText } }}
            _active={{
              bg: 'inherit',
              transform: 'none',
              borderColor: 'transparent'
            }}
            _focus={{
              boxShadow: 'none'
            }}
          >
            {path}
          </Link>
        </Box>
        <Box ms="auto" w={{ sm: '100%', md: 'unset' }}>
          <AdminNavbarLinks logoText={logoText} onOpen={onOpen} />
        </Box>
      </Flex>
    </Flex>
  )
}

export default AdminNavbar
