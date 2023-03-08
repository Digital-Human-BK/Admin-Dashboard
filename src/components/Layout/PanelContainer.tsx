import { ReactNode } from 'react'
import { Box, useStyleConfig } from '@chakra-ui/react'

interface PanelContainerProps {
  children: ReactNode
  variant?: string
  [key: string]: any
}
const PanelContainer = (props: PanelContainerProps) => {
  const { variant, children, ...rest } = props
  const styles = useStyleConfig('PanelContainer', { variant })
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  )
}

export default PanelContainer
