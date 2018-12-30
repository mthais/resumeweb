import React, { Component } from 'react'
import Formsy from 'formsy-react-2'
import { Col, Button, FormGroup, Label } from 'reactstrap'
import { FormInput } from './../../Components/Form/FormInput'

class RecoveryPasswordPage extends Component {
  state = {
    canSubmit: false
  }

  disableSubmitButton = () => {
    this.setState({
      canSubmit: false
    })
  }

  enableSubmitButton = () => {
    this.setState({
      canSubmit: true
    })
  }

  render () {
    const { canSubmit } = this.state

    return (
      <Col>
        <h2 className='text-center page-title'>Esqueceu sua senha?</h2>
        <p className='text-wrapper'>
                                Digite seu endereço de e-mail abaixo e lhe enviaremos um
                                link para redifinir sua senha.
        </p>

        <Formsy.Form onValid={ this.enableSubmitButton } onInvalid={ this.disableSubmitButton }>
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
    )
  }
}

export default RecoveryPasswordPage
