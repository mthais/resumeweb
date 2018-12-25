import React, { Component } from 'react';
import './../assets/css/TopNav.css'
import { Button, Row, Col } from 'reactstrap';
class TopNav extends Component {
    render() {
        return (
            <div className="TopNav">
                <Row>
                    <Col md={2}>
                        <button class="button button4">Novidades</button>
                    </Col>
                    <Col md={7}>
                        <div className="lorem-ipsum">
                            <span>Lorem Ipsum..Lorem Ipsum..Lorem Ipsum..Lorem Ipsum..Lorem Ipsum..</span>
                            <br />
                            <span className="para2">Lorem Ipsum..Lorem Ipsum..Lorem Ipsum..Lorem Ipsum..Lorem Ipsum..</span>
                        </div>
                    </Col>
                    <Col md={3} className="Inscrever">
                        <span>Voce quer se inscrever para receber
                        atualizacoes?<a href="#"> Inscrever</a></span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TopNav;
