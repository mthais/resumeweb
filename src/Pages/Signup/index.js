import React, { Component } from 'react'
import { connect } from 'react-redux'
import Formsy from 'formsy-react-2'
import { Link } from 'react-router-dom'
import { handleRegister } from '../../Store/User/actions'
import { PasswordRule } from './../../Rules/PasswordRule'
import { FormInput } from './../../Components/Form/FormInput'
import { LinkedinButton } from './../../Components/Social/Linkedin'
import { Row, Col, Button, FormGroup, Label } from 'reactstrap'

export class SignupPage extends Component {
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

  submit = async (data) => {
    try {
      await this.props.handleRegister(data)
    }
    catch (e) {
      alert(e)
    }
  }

  render () {
    const { canSubmit } = this.state
    const { isFetchingRegister } = this.props
    const isSubmitButtonDisabled = !canSubmit || isFetchingRegister

    return (
      <Col>
        <h2 className='text-center page-title'>Bem Vindo!</h2>

        <LinkedinButton />

        <div className='divider'>
          <span>OU</span>
        </div>

        <Formsy.Form
          onValidSubmit={ this.submit }
          onValid={ this.enableSubmitButton }
          onInvalid={ this.disableSubmitButton }
        >

          { /* INPUT DE NAME */ }
          <FormGroup>
            <Label for='name' className='mb-0'>Nome</Label>
            <FormInput
              name='name'
              required
              validations={ { maxLength: 20 } }
              validationErrors={ { maxLength: 'O campo nome precisa ter no máximo 20 letras.' } }
              maxLength='20'
              id='name'
              className='form-control'
            />
          </FormGroup>

          { /* INPUT DE EMAIL */ }
          <FormGroup>
            <Label for='email' className='mb-0'>Email</Label>
            <FormInput
              validations={ { isEmail: true } }
              validationErrors={ { isEmail: 'O e-mail digitado é inválido' } }
              type='email'
              name='email'
              id='email'
              placeholder='email@exemplo.com'
              className='form-control'
            />
          </FormGroup>

          { /* INPUT DE SENHA */ }
          <FormGroup>
            <Label for='password' className='mb-0'>Senha</Label>
            <FormInput type='password'
              name='password'
              validations={ {
                passwordRule: PasswordRule
              } }
              id='password'
              className='form-control' />
          </FormGroup>

          { /* INPUT DE AGRREMENT */ }
          <FormGroup check>
            <Label className='text-wrapper' check>
              <FormInput required type='checkbox' name='policies' id='policies' />
                                        Para cadastrar, você concorda com nossa
              <Link to={ '' } className='link'> Politica de privacidade</Link> e
              <Link to={ '' } className='link'> Termos de uso</Link>
            </Label>
          </FormGroup>

          <Row className='pt-3'>
            <Col>
              <Link className='link' to='/login'>Eu já tenho uma conta!</Link>
            </Col>
            <Col className='text-right'>
              <Button
                type='submit'
                disabled={ isSubmitButtonDisabled }
                className='px-4'
                color='primary'>Cadastrar</Button>
            </Col>
          </Row>

        </Formsy.Form>
      </Col>
    )
  }
}

const mapStateToProps = ({ users: { isFetchingRegister } }) => ({
  isFetchingRegister
})
const mapDispatchToProps = dispatch => ({
  handleRegister: (payload) => dispatch(handleRegister(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)
