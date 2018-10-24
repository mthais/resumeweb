import Formsy from 'formsy-react-2';
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { PasswordRule } from './../../Rules/PasswordRule';
import { FormInput } from './../../Components/Form/FormInput';
import { LinkedinButton } from './../../Components/Social/Linkedin';
import { Card, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class SignupPage extends Component {

    /**
     * Constructor method
     *
     */
    constructor() {
        super();
        this.state = {
            canSubmit: false
        }
        this.disableButton = this.disableButton.bind(this);
        this.enableButton  = this.enableButton.bind(this);
    }

    /**
     * Disable the submit button
     *
     */
    disableButton() {
        this.setState({
            canSubmit: false
        })
    }

    /**
     * Enable the submit button
     *
     */
    enableButton() {
        this.setState({
            canSubmit: true
        });
    }

    /**
     * Render the Login Page
     *
     */
    render() {
        return (
            <Row>
                <Col className="d-none d-sm-block pt-5">
                    <img width="100%" src="/login_person.png" />
                </Col>
                <Col>
                    <h2 className="text-center page-title">Bem vindo!</h2>

                    <LinkedinButton></LinkedinButton>

                    <div className="divider">
                        <span>OU</span>
                    </div>
                    
                    <Formsy.Form onValid={this.enableButton} onInvalid={this.disableButton} >      

                        {/* INPUT DE NAME */}
                        <FormGroup>
                            <Label for="name" className="mb-0">Nome</Label>
                            <FormInput  name="name" 
                                        required
                                        validations={{
                                            maxLength: 20
                                        }}
                                        validationErrors={{
                                            maxLength: "O campo nome precisa ter no máximo 20 letras."
                                        }}
                                        maxLength="20"
                                        id="name" />
                        </FormGroup>                  
                        
                        {/* INPUT DE EMAIL */}
                        <FormGroup>
                            <Label for="email" className="mb-0">Email</Label>
                            <FormInput  validations={{
                                            isEmail: true
                                        }} 
                                        validationErrors={{
                                            isEmail: 'O e-mail digitado é inválido'
                                        }} 
                                        type="email" 
                                        name="email" 
                                        id="email"
                                        placeholder="email@contato.com" />
                        </FormGroup>

                        {/* INPUT DE SENHA */}
                        <FormGroup>
                            <Label for="password" className="mb-0">Senha</Label>
                            <FormInput  type="password" 
                                        name="password" 
                                        validations={{
                                            passwordRule: PasswordRule
                                        }}
                                        id="password" />                        
                        </FormGroup>

                        {/* INPUT DE AGRREMENT */}
                        <FormGroup check>
                            <Label className="text-wrapper" check>
                                <FormInput required type="checkbox" name="policies" id="policies" />
                                Para cadastrar, você concorda com nossa 
                                <Link to={''} className="link"> Politica de privacidade</Link> e 
                                <Link to={''} className="link"> Termos de uso</Link>
                            </Label>
                        </FormGroup>

                        <Row className="pt-3">
                            <Col>
                                <Link className="link" to="/login">Eu já tenho uma conta!</Link>
                            </Col>
                            <Col className="text-right">
                                <Button disabled={!this.state.canSubmit} 
                                        className="px-4" 
                                        color="primary">Cadastrar</Button>
                            </Col>
                        </Row>

                    </Formsy.Form>
                </Col>
            </Row>
        );
    }
} 

// End of file
