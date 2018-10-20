import React, { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import { LinkedinButton } from './../../Components/Social/Linkedin';

export class LoginPage extends Component {

    /**
     * Render the Login Page
     *
     */
    render() {
        return (
            <Row>
                <Col className="pt-4">
                    <img width="100%" src="/login_person.png" />
                </Col>
                <Col>
                    <h2 className="text-center page-title">Bem vindo de volta!</h2>
                    <p className="text-wrapper">
                        Para se manter conectado conosco, favor inserir 
                        seu endereço de Email e sua Senha
                    </p>

                    <LinkedinButton></LinkedinButton>

                    <div className="divider">
                        <span>OU</span>
                    </div>
                    
                    <Form>                        
                        
                        {/* INPUT DE EMAIL */}
                        <FormGroup>
                            <Label for="email" className="mb-0">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="email@contato.com" />
                        </FormGroup>

                        {/* INPUT DE SENHA */}
                        <FormGroup>
                            <Label for="password" className="mb-0">Password</Label>
                            <Input type="password" name="password" id="password" />
                        </FormGroup>

                        <Row>
                            <Col>
                                <Link className="link" to="/signup">Eu não tenho uma conta!</Link>
                            </Col>
                            <Col className="text-right">
                                <Button className="px-4" color="primary">Entrar</Button>
                            </Col>
                        </Row>

                    </Form>
                </Col>
            </Row>
        );
    }
} 

// End of file
