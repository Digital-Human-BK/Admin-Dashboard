import { useRef } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { NavLink, useLocation } from 'react-router-dom'
// chakra imports
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'

import IconBox from 'components/Icons/IconBox'
import Separator from 'components/Separator/Separator'
// import { CreativeTimLogo } from 'components/Icons/Icons'
import { ReactComponent as MantraLogo } from 'assets/svg/mantra-logo.svg'
import { AdminRoute, DashboardRoutes } from 'types'

interface SidebarResponsiveProps {
  logoText: string
  routes: DashboardRoutes
}

const SidebarResponsive = ({ logoText, routes }: SidebarResponsiveProps) => {
  // to check for active links and opened collapses
  const location = useLocation()
  // Chakra Color Mode
  const activeBg = useColorModeValue('white', 'gray.700')
  const inactiveBg = useColorModeValue('white', 'gray.700')
  const activeColor = useColorModeValue('gray.700', 'white')
  const inactiveColor = useColorModeValue('gray.400', 'gray.400')

  const mainPanel = useRef(null)

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => {
    return location.pathname === routeName ? 'active' : ''
  }

  const createLinks = (routes: DashboardRoutes) => {
    return routes.map((prop: AdminRoute) => {
      if (prop.layout === '/auth') {
        return null
      }
      return (
        <NavLink to={prop.layout + prop.path} key={prop.name}>
          {activeRoute(prop.layout + prop.path) === 'active' ? (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg={activeBg}
              mb={{
                xl: '12px'
              }}
              mx={{
                xl: 'auto'
              }}
              ps={{
                sm: '10px',
                xl: '16px'
              }}
              py="12px"
              borderRadius="15px"
              _hover={{}}
              w="100%"
              _active={{
                bg: 'inherit',
                transform: 'none',
                borderColor: 'transparent'
              }}
              _focus={{
                boxShadow: 'none'
              }}
            >
              <Flex>
                {typeof prop.icon === 'string' ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg="teal.300"
                    color="white"
                    h="30px"
                    w="30px"
                    me="12px"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={activeColor} my="auto" fontSize="sm">
                  {prop.name}
                </Text>
              </Flex>
            </Button>
          ) : (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg="transparent"
              mb={{
                xl: '12px'
              }}
              mx={{
                xl: 'auto'
              }}
              py="12px"
              ps={{
                sm: '10px',
                xl: '16px'
              }}
              borderRadius="15px"
              _hover={{}}
              w="100%"
              _active={{
                bg: 'inherit',
                transform: 'none',
                borderColor: 'transparent'
              }}
              _focus={{
                boxShadow: 'none'
              }}
            >
              <Flex>
                {typeof prop.icon === 'string' ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg={inactiveBg}
                    color="teal.300"
                    h="30px"
                    w="30px"
                    me="12px"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={inactiveColor} my="auto" fontSize="sm">
                  {prop.name}
                </Text>
              </Flex>
            </Button>
          )}
        </NavLink>
      )
    })
  }

  const links = <>{createLinks(routes)}</>
  //  BRAND
  //  Chakra Color Mode
  const hamburgerColor = useColorModeValue('gray.500', 'gray.200')
  const brand = (
    <Box pt="35px" mb="8px">
      <Link
        href="/admin/dashboard"
        display="flex"
        lineHeight="100%"
        mb="30px"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
        fontSize="11px"
      >
        <MantraLogo width="25px" height="25px" />
        {/* <CreativeTimLogo w="32px" h="32px" me="10px" /> */}
        <Text fontSize="sm" mt="3px">
          {logoText}
        </Text>
      </Link>
      <Separator />
    </Box>
  )

  // SIDEBAR
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)
  // Color variables
  return (
    <Flex
      display={{ sm: 'flex', xl: 'none' }}
      ref={mainPanel}
      alignItems="center"
    >
      <HamburgerIcon
        color={hamburgerColor}
        w="18px"
        h="18px"
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          w="250px"
          maxW="250px"
          ms={{
            sm: '16px'
          }}
          my={{
            sm: '16px'
          }}
          borderRadius="16px"
        >
          <DrawerCloseButton
            _focus={{ boxShadow: 'none' }}
            _hover={{ boxShadow: 'none' }}
          />
          <DrawerBody maxW="250px" px="1rem" overflowY="hidden">
            <Box maxW="100%" h="100vh">
              <Box>{brand}</Box>
              <Stack direction="column" mb="40px">
                <Box>{links}</Box>
              </Stack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default SidebarResponsive
