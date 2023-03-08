import { ReactNode } from 'react'
import { Box, useStyleConfig } from '@chakra-ui/react'

interface CardBodyProps {
  children: ReactNode
  [key: string]: any
}

const CardBody = ({ children, ...rest }: CardBodyProps) => {
  const styles = useStyleConfig('CardBody')
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  )
}

export default CardBody
