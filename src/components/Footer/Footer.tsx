import { Flex, Link, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
      flexDirection={{
        base: 'column',
        xl: 'row'
      }}
      alignItems={{
        base: 'center',
        xl: 'start'
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: 'center',
          xl: 'start'
        }}
        mb={{ base: '20px', xl: '0px' }}
      >
        <Link href="https://github.com/Digital-Human-BK/" target="_blank">
          <Text as="span">Reworked by BK</Text>
        </Link>
      </Text>
    </Flex>
  )
}

export default Footer
