import { FC, ReactNode } from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

const Web3ProviderReact: FC<{
  children: ReactNode
}> = ({ children }) => {
  const web3GetLibrary = (provider: any): Web3Provider => {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000

    return library
  }

  return (
    <Web3ReactProvider getLibrary={web3GetLibrary}>
      {children}
    </Web3ReactProvider>
  )
}

export default Web3ProviderReact
