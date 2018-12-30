import React, { Component } from 'react'
import Formsy from 'formsy-react-2'
import { Col, Button, FormGroup, Label } from 'reactstrap'
import { FormInput } from '../../Components/Form/FormInput'
import { PasswordRule } from './../../Rules/PasswordRule'

class ResetPasswordPage extends Component {
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
        <h2 className='text-center page-title'>
                                Redefinir Senha
        </h2>
        <p className='text-wrapper'>
                                Digite abaixo sua nova senha!
        </p>

        <Formsy.Form
          onValid={ this.enableSubmitButton }
          onInvalid={ this.disableSubmitButton }
        >
          <FormGroup>
            <Label for='password' className='mb-0'>Nova Senha</Label>
            <FormInput
              ref={ this.passwordField }
              type='password'
              name='password'
              validations={ { passwordRule: PasswordRule } }
              id='password'
              className='form-control'
            />
          </FormGroup>

          <FormGroup>
            <Label for='password' className='mb-0'>Confirmar Senha</Label>
            <FormInput type='password'
              name='confirmPassword'
              validations={ {
                passwordRule: PasswordRule,
                equalsField: 'password'
              } }
              validationErrors={ {
                equalsField: 'A senha de confirmação precisa ser igual a senha atual.'
              } }
              id='confirmPassword'
              className='form-control' />

          </FormGroup>
          <Button
            className='px-4 float-right'
            color='primary'
            disabled={ !canSubmit }
          >
                                    Redefinir Senha
          </Button>
        </Formsy.Form>
      </Col>
    )
  }
}

export default ResetPasswordPage
