import { ReactNode } from 'react'
import { Box, useStyleConfig } from '@chakra-ui/react'

interface CardHeaderProps {
  children: ReactNode
  [key: string]: any
}

const CardHeader = ({ children, ...rest }: CardHeaderProps) => {
  const styles = useStyleConfig('CardHeader')
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  )
}

export default CardHeader
