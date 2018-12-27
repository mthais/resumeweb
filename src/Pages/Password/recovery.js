import React, { Component } from 'react'
import Formsy from 'formsy-react-2'
import { Row, Col, Button, FormGroup, Label } from 'reactstrap'
import { FormInput } from './../../Components/Form/FormInput'

export class RecoveryPasswordPage extends Component {
  constructor () {
    super()
    this.state = {
      canSubmit: false
    }

    this.disableButton = this.disableButton.bind(this)
    this.enableButton = this.enableButton.bind(this)
  }

  /**
     * Disable the submit button
     *
     */
  disableButton () {
    this.setState({
      canSubmit: false
    })
  }

  /**
     * Enable the submit button
     *
     */
  enableButton () {
    this.setState({
      canSubmit: true
    })
  }

  render () {
    const { canSubmit } = this.state

    return (
      <Row>
        <Col className='d-none d-sm-block pt-4'>
          <img width='100%' src='/login_person.png' />
        </Col>
        <Col>
          <h2 className='text-center page-title'>Esqueceu sua senha?</h2>
          <p className='text-wrapper'>
                        Digite seu endereço de e-mail abaixo e lhe enviaremos um
                        link para redifinir sua senha.
          </p>

          <Formsy.Form onValid={ this.enableButton } onInvalid={ this.disableButton }>
            <FormGroup>
              <Label for='email' className='mb-0'>Email</Label>
              <FormInput
                validations={ {
                  isEmail: true
                } }
                validationErrors={ {
                  isEmail: 'O e-mail digitado é inválido'
                } }
                type='email'
                name='email'
                id='email'
                placeholder='email@contato.com'
                className='form-control'
              />
            </FormGroup>

            <Button disabled={ !canSubmit } className='px-4' color='primary'>
                            Enviar e-mail de redefinição de senha
            </Button>
          </Formsy.Form>
        </Col>
      </Row>
    )
  }
}
