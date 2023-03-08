import { ReactNode } from 'react'
import { Box, useStyleConfig } from '@chakra-ui/react'

interface PanelContentProps {
  children: ReactNode
  [key: string]: any
}

const PanelContent = ({ children, ...rest }: PanelContentProps) => {
  const styles = useStyleConfig('PanelContent')
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  )
}

export default PanelContent
