import { useState } from 'react'
import { Portal, useDisclosure } from '@chakra-ui/react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import Footer from 'components/Footer/Footer'
import Sidebar from 'components/Sidebar'
import MainPanel from 'components/Layout/MainPanel'
import AdminNavbar from 'components/Navbars/AdminNavbar'
import PanelContent from 'components/Layout/PanelContent'
import PanelContainer from 'components/Layout/PanelContainer'
import FixedPlugin from 'components/FixedPlugin/FixedPlugin'
import Configurator from 'components/Configurator/Configurator'

import routes from 'routes'
import { AdminRoute, DashboardRoutes } from 'types'

const AdminContainer = () => {
  // states and functions
  const location = useLocation()
  const [fixed, setFixed] = useState(false)
  const [sidebarVariant, setSidebarVariant] = useState('transparent')

  // functions for changing the states from components
  const getRoute = () => {
    return location.pathname !== '/admin/full-screen-maps'
  }

  const getRoutes = (routes: DashboardRoutes) => {
    return routes.map((prop: AdminRoute) => {
      if (prop.layout === '/admin') {
        return (
          <Route path={prop.path} element={prop.component} key={prop.path} />
        )
      }
      return null
    })
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  document.documentElement.dir = 'ltr'

  // Chakra Color Mode
  return (
    <>
      <Sidebar
        routes={routes}
        logoText="MANTRA Admin Panel"
        sidebarVariant={sidebarVariant}
      />
      <MainPanel
        w={{
          base: '100%',
          xl: 'calc(100% - 275px)'
        }}
      >
        <Portal>
          <AdminNavbar
            onOpen={onOpen}
            logoText="MANTRA Admin Panel"
            fixed={fixed}
          />
        </Portal>
        {getRoute() ? (
          <PanelContent>
            <PanelContainer>
              <Routes>
                {getRoutes(routes)}
                <Route
                  path="/"
                  index
                  element={<Navigate to="dashboard" replace />}
                />
              </Routes>
            </PanelContainer>
          </PanelContent>
        ) : null}
        <Footer />
        <Portal>
          <FixedPlugin onOpen={onOpen} />
        </Portal>
        <Configurator
          isOpen={isOpen}
          onClose={onClose}
          isChecked={fixed}
          onSwitch={(value: boolean) => {
            setFixed(value)
          }}
          onOpaque={() => setSidebarVariant('opaque')}
          onTransparent={() => setSidebarVariant('transparent')}
        />
      </MainPanel>
    </>
  )
}

export default AdminContainer
