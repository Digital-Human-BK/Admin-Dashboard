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
        <Link href="https://www.mantraomniverse.com/" target="_blank">
          <Text as="span">MANTRA Finance</Text>
        </Link>
      </Text>
    </Flex>
  )
}

export default Footer
