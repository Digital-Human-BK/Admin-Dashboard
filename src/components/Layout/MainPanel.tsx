import { ReactNode } from 'react'
import { Box, useStyleConfig } from '@chakra-ui/react'

interface MainPanelProps {
  children: ReactNode
  [key: string]: any
}

const MainPanel = ({ children, ...rest }: MainPanelProps) => {
  const styles = useStyleConfig('MainPanel')
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  )
}

export default MainPanel
