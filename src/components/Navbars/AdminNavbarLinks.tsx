import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
// Chakra Icons
import { BellIcon, SearchIcon } from '@chakra-ui/icons'
// Chakra Imports
import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
// Assets
import avatar1 from 'assets/img/avatars/avatar1.png'
import avatar2 from 'assets/img/avatars/avatar2.png'
import avatar3 from 'assets/img/avatars/avatar3.png'
// Custom Icons
import { ProfileIcon, SettingsIcon } from 'components/Icons/Icons'
// Custom Components
import ItemContent from 'components/Menu/ItemContent'
import SidebarResponsive from 'components/Sidebar/SidebarResponsive'

import routes from 'routes'

interface HeaderLinksProps {
  logoText: string
  onOpen: () => void
}

const HeaderLinks = ({ logoText, onOpen }: HeaderLinksProps) => {
  // Chakra Color Mode
  const mainTeal = useColorModeValue('teal.300', 'teal.300')
  const inputBg = useColorModeValue('white', 'gray.800')
  const mainText = useColorModeValue('gray.700', 'gray.200')
  const navbarIcon = useColorModeValue('gray.500', 'gray.200')
  const searchIcon = useColorModeValue('gray.700', 'gray.200')

  const settingsRef = useRef(null)

  return (
    <Flex
      pe={{ sm: '0px', md: '16px' }}
      w={{ sm: '100%', md: 'auto' }}
      alignItems="center"
      flexDirection="row"
    >
      <InputGroup
        cursor="pointer"
        bg={inputBg}
        borderRadius="15px"
        w={{
          sm: '128px',
          md: '200px'
        }}
        me={{ sm: 'auto', md: '20px' }}
        _focus={{
          borderColor: { mainTeal }
        }}
        _active={{
          borderColor: { mainTeal }
        }}
      >
        <InputLeftElement>
          <IconButton
            bg="inherit"
            borderRadius="inherit"
            _hover={{}}
            _active={{
              bg: 'inherit',
              transform: 'none',
              borderColor: 'transparent'
            }}
            _focus={{
              boxShadow: 'none'
            }}
            icon={<SearchIcon color={searchIcon} w="15px" h="15px" />}
            aria-label=""
          />
        </InputLeftElement>
        <Input
          fontSize="xs"
          py="11px"
          color={mainText}
          placeholder="Type here..."
          borderRadius="inherit"
        />
      </InputGroup>
      <NavLink to="/auth/signin">
        <Button
          ms="0px"
          px="0px"
          me={{ sm: '2px', md: '16px' }}
          color={navbarIcon}
          variant="transparent-with-icon"
          leftIcon={
            <ProfileIcon color={navbarIcon} w="22px" h="22px" me="0px" />
          }
        >
          <Text display={{ sm: 'none', md: 'flex' }}>Sign In</Text>
        </Button>
      </NavLink>
      <SidebarResponsive
        logoText={logoText}
        // secondary={secondary}
        routes={routes}
      />
      <SettingsIcon
        cursor="pointer"
        ms={{ base: '16px', xl: '0px' }}
        me="16px"
        ref={settingsRef}
        onClick={onOpen}
        color={navbarIcon}
        w="18px"
        h="18px"
      />
      <Menu>
        <MenuButton>
          <BellIcon color={navbarIcon} w="18px" h="18px" />
        </MenuButton>
        <MenuList p="16px 8px">
          <Flex flexDirection="column">
            <MenuItem borderRadius="8px" mb="10px">
              <ItemContent
                time="13 minutes ago"
                info="from Alicia"
                boldInfo="New Message"
                aName="Alicia"
                aSrc={avatar1}
              />
            </MenuItem>
            <MenuItem borderRadius="8px" mb="10px">
              <ItemContent
                time="2 days ago"
                info="by Josh Henry"
                boldInfo="New Album"
                aName="Josh Henry"
                aSrc={avatar2}
              />
            </MenuItem>
            <MenuItem borderRadius="8px">
              <ItemContent
                time="3 days ago"
                info="Payment succesfully completed!"
                boldInfo=""
                aName="Kara"
                aSrc={avatar3}
              />
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default HeaderLinks
