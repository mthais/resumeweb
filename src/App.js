import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoginPage } from './Pages/Login';
import { SignupPage } from './Pages/Signup';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Row>
            <Col xs="12" md={{ size: 8, offset: 2 }} className="pt-5">
              <Card>
                <CardBody>
                  <Route exact path="/" component={LoginPage} />
                  <Route path="/login"  component={LoginPage} />
                  <Route path="/signup" component={SignupPage} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
