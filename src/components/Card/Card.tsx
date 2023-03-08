import { ReactNode } from 'react'
import { Box, useStyleConfig } from '@chakra-ui/react'

interface CardProps {
  children: ReactNode
  [key: string]: any
}

const Card = ({ children, ...rest }: CardProps) => {
  const styles = useStyleConfig('Card')
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  )
}

export default Card
