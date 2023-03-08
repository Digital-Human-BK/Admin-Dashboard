// import
import SignIn from 'containers/Auth/SignIn'
// import SignUp from 'containers/Auth/SignUp'
import Billing from 'containers/Admin/Billing'
import Dashboard from 'containers/Admin/Dashboard'
import Profile from 'containers/Admin/Profile'
import Tables from 'containers/Admin/Tables'

import {
  CreditIcon,
  DocumentIcon,
  HomeIcon,
  PersonIcon,
  // RocketIcon,
  StatsIcon
} from 'components/Icons/Icons'

import { DashboardRoutes } from 'types'

const dashRoutes: DashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: <HomeIcon color="inherit" />,
    component: <Dashboard />,
    layout: '/admin'
  },
  {
    path: '/tables',
    name: 'Tables',
    icon: <StatsIcon color="inherit" />,
    component: <Tables />,
    layout: '/admin'
  },
  {
    path: '/billing',
    name: 'Billing',
    icon: <CreditIcon color="inherit" />,
    component: <Billing />,
    layout: '/admin'
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: <PersonIcon color="inherit" />,
    component: <Profile />,
    layout: '/admin'
  },
  {
    path: '/signin',
    name: 'Sign In',
    icon: <DocumentIcon color="inherit" />,
    component: <SignIn />,
    layout: '/auth'
  }
]
export default dashRoutes
