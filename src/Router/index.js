import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import getPrivateRoutes from './privateRoutes'
import getSessionRoutes from './sessionRoutes'

const Routes = ({ isLoggedIn }) => (
  <Router>
    <Switch>
      { getPrivateRoutes(isLoggedIn) }
      { getSessionRoutes() }
    </Switch>
  </Router>
)

export default Routes
