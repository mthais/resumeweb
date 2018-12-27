import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { LoginPage } from './Pages/Login'
import { SignupPage } from './Pages/Signup'
import { RecoveryPasswordPage } from './Pages/Password/recovery'
import { ResetPasswordPage } from './Pages/Password/reset'
import { Dashboard } from './Pages/Dashboard'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route path='/dashboard' component={ Dashboard } />
          <Route exact path='/' component={ LoginPage } />
          <Route path='/login' component={ LoginPage } />
          <Route path='/signup' component={ SignupPage } />
          <Route path='/recoverypassword' component={ RecoveryPasswordPage } />
          <Route path='/resetpassword' component={ ResetPasswordPage } />
        </div>
      </Router>
    )
  }
}

export default App
