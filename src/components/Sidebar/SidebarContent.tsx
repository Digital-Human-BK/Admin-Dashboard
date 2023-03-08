import { NavLink, useLocation } from 'react-router-dom'
// chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ReactComponent as DashboardLogo } from 'assets/svg/dashboard-logo.svg'

// Custom components
import IconBox from 'components/Icons/IconBox'
import Separator from 'components/Separator/Separator'
import { AdminRoute, DashboardRoutes } from 'types'

// this function creates the links and collapses that appear in the sidebar (left menu)

interface SidebarContentProps {
  logoText: string
  routes: DashboardRoutes
}

const SidebarContent = ({ logoText, routes }: SidebarContentProps) => {
  // to check for active links and opened collapses
  const location = useLocation()

  // Chakra Color Mode
  const activeBg = useColorModeValue('white', 'gray.700')
  const inactiveBg = useColorModeValue('white', 'gray.700')
  const activeColor = useColorModeValue('gray.700', 'white')
  const inactiveColor = useColorModeValue('gray.400', 'gray.400')

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

  return (
    <>
      <Box pt="25px" mb="12px">
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
          <Box mr="10px">
            <DashboardLogo width="32px" height="32px" />
          </Box>
          <Text fontSize="sm" mt="3px">
            {logoText}
          </Text>
        </Link>
        <Separator />
      </Box>
      <Stack direction="column" mb="40px">
        <Box>{links}</Box>
      </Stack>
    </>
  )
}

export default SidebarContent
