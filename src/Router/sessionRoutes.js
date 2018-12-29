import React from 'react'
import { Route } from 'react-router'
import { Row, Col, Card, CardBody, Container } from 'reactstrap'
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

const Wrapper = ({ children }) => (
  <Container>
    <Row>
      <Col xs='12' md={ { size: 8, offset: 2 } } className='pt-5 card-session-layout'>
        <Card>
          <CardBody>
            <Row>
              <Col className='d-none d-sm-block pt-4'>
                <img width='100%' src='/login_person.png' />
              </Col>
              { children }
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
)

const sessionRouteLayout = ({ component: Component, path }) => (
  <Route
    exact
    path={ path }
    render={ () => <Wrapper><Component /></Wrapper> }
    key={ path }
  />
)

const getSessionRoutes = () => sessionRoutes.map(sessionRouteLayout)

export default getSessionRoutes
