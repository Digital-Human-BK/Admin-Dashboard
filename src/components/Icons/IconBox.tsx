import { Flex } from '@chakra-ui/react'

import { ReactNode } from 'react'

interface IconBoxProps {
  children: ReactNode
  [key: string]: any
}

const IconBox = (props: IconBoxProps) => {
  const { children, ...rest } = props

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      borderRadius="12px"
      {...rest}
    >
      {children}
    </Flex>
  )
}

export default IconBox
