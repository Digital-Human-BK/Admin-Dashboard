import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import ThemeProvider from 'providers/ThemeProvider'
import Web3ProviderReact from 'providers/Web3ProviderReact'

import AdminContainer from 'containers/Admin'
import AuthContainer from 'containers/Auth/Auth'

const App = () => {
  return (
    <Web3ProviderReact>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/admin" replace />} />
            <Route path="/admin/*" element={<AdminContainer />} />
            <Route path="/auth/*" element={<AuthContainer />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Web3ProviderReact>
  )
}

export default App
