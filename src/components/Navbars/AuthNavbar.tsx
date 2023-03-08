import { NavLink } from 'react-router-dom'
// Chakra imports
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

import { HomeIcon } from 'components/Icons/Icons'
import { ReactComponent as MantraLogo } from 'assets/svg/mantra-logo.svg'

import SidebarResponsive from 'components/Sidebar/SidebarResponsive'

import routes from 'routes'

interface AuthNavbarProps {
  logoText: string
}

const AuthNavbar = ({ logoText }: AuthNavbarProps) => {
  // Chakra color mode
  const navbarIcon = useColorModeValue('gray.700', 'gray.200')
  const mainText = useColorModeValue('gray.700', 'gray.200')
  const navbarBg = useColorModeValue(
    'linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)',
    'linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)'
  )
  const navbarBorder = useColorModeValue(
    '1.5px solid #FFFFFF',
    '1.5px solid rgba(255, 255, 255, 0.31)'
  )
  const navbarShadow = useColorModeValue(
    '0px 7px 23px rgba(0, 0, 0, 0.05)',
    'none'
  )
  const navbarFilter = useColorModeValue(
    'none',
    'drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))'
  )
  const navbarBackdrop = 'blur(21px)'

  const navbarPosition: 'absolute' | 'fixed' = 'fixed'
  const brand = (
    <Link
      href="/admin/dashboard"
      display="flex"
      lineHeight="100%"
      fontWeight="bold"
      justifyContent="center"
      alignItems="center"
      color={mainText}
    >
      <Box mr="10px" ml="10px">
        <MantraLogo width="25px" height="25px" />
      </Box>
      <Text fontSize="sm" mt="3px">
        {logoText}
      </Text>
    </Link>
  )
  const linksAuth = (
    <HStack display={{ sm: 'none', lg: 'flex' }}>
      <NavLink to="/admin/dashboard">
        <Button
          fontSize="sm"
          ms="0px"
          px="0px"
          me={{ sm: '2px', md: '16px' }}
          color={navbarIcon}
          variant="transparent-with-icon"
          leftIcon={<HomeIcon color={navbarIcon} w="12px" h="12px" me="0px" />}
        >
          <Text>Dashboard</Text>
        </Button>
      </NavLink>
    </HStack>
  )
  return (
    <Flex
      position={navbarPosition}
      top="16px"
      left="50%"
      transform="translate(-50%, 0px)"
      background={navbarBg}
      border={navbarBorder}
      boxShadow={navbarShadow}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      borderRadius="15px"
      px="16px"
      py="22px"
      mx="auto"
      width="1044px"
      maxW="90%"
      alignItems="center"
    >
      <Flex w="100%" justifyContent={{ sm: 'start', lg: 'space-between' }}>
        {brand}
        <Box
          ms={{ base: 'auto', lg: '0px' }}
          display={{ base: 'flex', lg: 'none' }}
        >
          <SidebarResponsive logoText={logoText} routes={routes} />
        </Box>
        {linksAuth}
      </Flex>
    </Flex>
  )
}

export default AuthNavbar
