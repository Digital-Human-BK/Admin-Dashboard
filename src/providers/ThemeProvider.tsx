import { FC, ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'theme'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const ThemeProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      {children}
    </ChakraProvider>
  )
}

export default ThemeProvider
