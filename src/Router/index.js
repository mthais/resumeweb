import React from 'react'
import { connect } from 'react-redux'
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

const mapStateToProps = ({ users: { loggedUser } }) => ({
  isLoggedIn: Boolean(loggedUser)
})

export default connect(mapStateToProps)(Routes)
