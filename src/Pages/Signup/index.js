import React, { Component } from 'react';
import { LinkedinButton } from './../../Components/Social/Linkedin';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";

export class SignupPage extends Component {

    /**
     * Render the Login Page
     *
     */
    render() {
        return (
            <Row>
                <Col className="pt-5">
                    <img width="100%" src="/login_person.png" />
                </Col>
                <Col>
                    <h2 className="text-center page-title">Bem vindo!</h2>

                    <LinkedinButton></LinkedinButton>

                    <div className="divider">
                        <span>OU</span>
                    </div>
                    
                    <Form>      

                        {/* INPUT DE NAME */}
                        <FormGroup>
                            <Label for="name" className="mb-0">Nome</Label>
                            <Input type="text" name="name" id="name" />
                        </FormGroup>                  
                        
                        {/* INPUT DE EMAIL */}
                        <FormGroup>
                            <Label for="email" className="mb-0">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="email@contato.com" />
                        </FormGroup>

                        {/* INPUT DE SENHA */}
                        <FormGroup>
                            <Label for="password" className="mb-0">Senha</Label>
                            <Input type="password" name="password" id="password" />
                        </FormGroup>

                        {/* INPUT DE AGRREMENT */}
                        <FormGroup check>
                            <Label className="text-wrapper" check>
                                <Input type="checkbox" />
                                Para cadastrar, você concorda com nossa 
                                <Link to={''}> Politica de privacidade</Link> e 
                                <Link to={''}> Termos de uso</Link>
                            </Label>
                        </FormGroup>

                        <Row className="pt-3">
                            <Col>
                                <Link className="link" to="/login">Eu já tenho uma conta!</Link>
                            </Col>
                            <Col className="text-right">
                                <Button className="px-4" color="primary">Cadastrar</Button>
                            </Col>
                        </Row>

                    </Form>
                </Col>
            </Row>
        );
    }
} 

// End of file
