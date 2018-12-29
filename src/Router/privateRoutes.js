import React from 'react'
import { Route, Redirect } from 'react-router'
import Dashboard from '../Pages/Dashboard'

const privateRoutes = [
  {
    component: Dashboard,
    path: '/'
  }
]

const privateRouteLayout = isLoggedIn => ({ component: Component, path }) => (
  <Route
    exact
    path={ path }
    render={
      ({ route }) => (
        !isLoggedIn
          ? <Redirect to='/login' />
          : <Component { ...route } />
      )
    }
    key={ path }
  />
)

const getPrivateRoutes = isLoggedIn => privateRoutes.map(
  privateRouteLayout(isLoggedIn)
)

export default getPrivateRoutes
