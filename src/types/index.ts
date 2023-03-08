export interface ChartData {
  name: string
  data: number[]
}

export interface AdminRoute {
  path: string
  name: string
  icon: JSX.Element
  component: JSX.Element
  secondaryNavbar?: boolean
  layout: string
}

// export interface AuthRoute {
//   name: string
//   category: string
//   state: string
//   layout?: string
//   path?: string
//   views: [
//     {
//       path: string
//       name: string
//       icon: JSX.Element
//       secondaryNavbar: boolean
//       component: JSX.Element
//       layout: string
//     }
//   ]
// }

export type DashboardRoutes = AdminRoute[]
