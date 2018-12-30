import React, { Component } from 'react'
import { connect } from 'react-redux'
import Formsy from 'formsy-react-2'
import { Link } from 'react-router-dom'
import { handleLogin } from '../../Store/User/actions'
import { PasswordRule } from './../../Rules/PasswordRule'
import { FormInput } from './../../Components/Form/FormInput'
import { LinkedinButton } from './../../Components/Social/Linkedin'
import { Row, Col, Button, FormGroup, Label } from 'reactstrap'

export class LoginPage extends Component {
  state = {
    canSubmit: false
  }

  disableSubmitButton = () => {
    this.setState({ canSubmit: false })
  }

  enableSubmitButton = () => {
    this.setState({
      canSubmit: true
    })
  }

  submit = async data => {
    try {
      await this.props.handleLogin(data)
      this.props.history.push('/')
    }
    catch (e) {
      alert(e)
    }
  }

  render () {
    const { isFetchingLoggingIn } = this.props
    const { canSubmit } = this.state
    const isSubmitButtonDisabled = !canSubmit || isFetchingLoggingIn

    return (
      <Col>
        <h2 className='text-center page-title'>Bem vindo de volta!</h2>
        <p className='text-wrapper'>
                                Para se manter conectado conosco, favor inserir
                                seu endereço de Email e sua Senha
        </p>

        <LinkedinButton />

        <div className='divider'>
          <span>OU</span>
        </div>

        <Formsy.Form
          onValidSubmit={ this.submit }
          onValid={ this.enableSubmitButton }
          onInvalid={ this.disableSubmitButton }
        >

          { /* INPUT DE EMAIL */ }
          <FormGroup>
            <Label for='email' className='mb-0'>Email</Label>
            <FormInput
              validations={ { isEmail: true } }
              validationErrors={ { isEmail: 'O e-mail digitado é inválido' } }
              type='email'
              name='email'
              id='email'
              className='form-control'
              placeholder='email@exemplo.com'
            />
          </FormGroup>

          { /* INPUT DE SENHA */ }
          <FormGroup row>
            <Col>
              <Label for='password' className='mb-0'>Senha</Label>
              <FormInput type='password'
                name='password'
                validations={ {
                  passwordRule: PasswordRule
                } }
                id='password'
                className='form-control' />
              <Link className='link float-right' to='/recoverypassword'>
                                            Esqueceu sua senha
              </Link>
            </Col>
          </FormGroup>

          <Row>
            <Col>
              <Link className='link' to='/signup'>Eu não tenho uma conta!</Link>
            </Col>
            <Col className='text-right'>
              <Button
                type='submit'
                disabled={ isSubmitButtonDisabled }
                className='px-4'
                color='primary'
              >
                Entrar
              </Button>
            </Col>
          </Row>

        </Formsy.Form>
      </Col>
    )
  }
}

const mapStateToProps = ({ users: { isFetchingLoggingIn } }) => ({
  isFetchingLoggingIn
})
const mapDispatchToProps = dispatch => ({
  handleLogin: (payload) => dispatch(handleLogin(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
