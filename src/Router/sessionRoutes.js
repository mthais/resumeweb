import React from 'react'
import { Route } from 'react-router'
import { LoginPage } from '../Pages/Login'
import { SignupPage } from '../Pages/Signup'
import { RecoveryPasswordPage } from '../Pages/Password/recovery'
import { ResetPasswordPage } from '../Pages/Password/reset'

const sessionRoutes = [
  {
    component: LoginPage,
    path: '/login'
  },
  {
    component: RecoveryPasswordPage,
    path: '/recoverypassword'
  },
  {
    component: SignupPage,
    path: '/signup'
  },
  {
    component: ResetPasswordPage,
    path: '/resetPasword'
  }
]

const sessionRouteLayout = ({ component: Component, path }) => (
  <Route
    exact
    path={ path }
    component={ Component }
    key={ path }
  />
)

const getSessionRoutes = () => sessionRoutes.map(sessionRouteLayout)

export default getSessionRoutes
