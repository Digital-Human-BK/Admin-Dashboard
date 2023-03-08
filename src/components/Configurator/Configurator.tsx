import { useState, useRef } from 'react'
// Chakra Imports
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  Switch,
  Text,
  useColorMode
} from '@chakra-ui/react'

import Separator from 'components/Separator/Separator'

interface ConfiguratorProps {
  isOpen: boolean
  isChecked: boolean
  onClose: () => void
  onSwitch: (value: boolean) => void
  onOpaque: () => void
  onTransparent: () => void
}

const Configurator = ({
  isOpen,
  isChecked,
  onClose,
  onSwitch,
  onOpaque,
  onTransparent
}: ConfiguratorProps) => {
  const settingsRef = useRef(null)
  const [switched, setSwitched] = useState(isChecked)

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      finalFocusRef={settingsRef}
      blockScrollOnMount={false}
    >
      <DrawerContent>
        <DrawerHeader pt="24px" px="24px">
          <DrawerCloseButton />
          <Text fontSize="xl" fontWeight="bold" mt="16px">
            MANTRA Admin Panel Configurator
          </Text>
          <Text fontSize="md" mb="16px">
            See your dashboard options.
          </Text>
          <Separator />
        </DrawerHeader>
        <DrawerBody w="340px" ps="24px" pe="40px">
          <Flex flexDirection="column">
            <Box>
              <Text fontSize="md" fontWeight="600">
                Sidenav Type
              </Text>
              <Text fontSize="sm" mb="16px">
                Choose between 2 different sidenav types.
              </Text>
              <Flex>
                <Button
                  w="50%"
                  p="8px 32px"
                  me="8px"
                  colorScheme="teal"
                  borderColor="teal.300"
                  color="teal.300"
                  variant="outline"
                  fontSize="xs"
                  onClick={onTransparent}
                >
                  Transparent
                </Button>
                <Button
                  type="submit"
                  bg="teal.300"
                  w="50%"
                  p="8px 32px"
                  mb={5}
                  _hover={{ bg: 'teal.500' }}
                  color="white"
                  fontSize="xs"
                  onClick={onOpaque}
                >
                  Opaque
                </Button>
              </Flex>
            </Box>
            <Box display="flex" justifyContent="space-between " mb="16px">
              <Text fontSize="md" fontWeight="600" mb="4px">
                Navbar Fixed
              </Text>
              <Switch
                colorScheme="teal"
                isChecked={switched}
                onChange={() => {
                  if (switched === true) {
                    onSwitch(false)
                    setSwitched(false)
                  } else {
                    onSwitch(true)
                    setSwitched(true)
                  }
                }}
              />
            </Box>
            <Flex justifyContent="space-between" alignItems="center" mb="24px">
              <Text fontSize="md" fontWeight="600" mb="4px">
                Dark/Light
              </Text>
              <Button onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
              </Button>
            </Flex>

            <Separator />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default Configurator
