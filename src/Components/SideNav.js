import React, { Component } from 'react'
import './../assets/css/dashboard.css'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Row,
  Col
} from 'reactstrap'
class TopNav extends Component {
  render () {
    return (
      <div className='SideNav'>
        <Row>
          <Col md={ 2 }>
            <div className='div1'>
              <br />
              <div className='box' />
            </div>
          </Col>
          <Col md={ 10 }>
            <SideNavBody />
          </Col>
          { /* <Col md={3}>
                        <div className="div2">
                            <br />
                            <div className="box2"></div>
                        </div>
                    </Col>
                    <Col md={9}>
                        <SideNavBody />
                    </Col> */ }
        </Row>
      </div >
    )
  }
}

class SideNavBody extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle () {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render () {
    return (
      <div className='body'>
        <div className='CV1'>
          <h5 className='Nome-curriculo'>Nome do Usuario - Curriculo</h5>
          <p>Ultima Edicao em 16 Novembro 2018 - 20:01</p>
          <div className='container'>
            <div className='actions row'>
              <Button outline color='primary' className='Planos'>
                <i className='fas fa-download' /> Download
              </Button>
              <Button outline color='primary' className='Planos'>
                <i className='fas fa-edit' /> Editor
              </Button>
              <Button outline color='primary' className='Planos'>
                <i className='far fa-clone' /> Duplicate
              </Button>
              <span>
                <Dropdown isOpen={ this.state.dropdownOpen } toggle={ this.toggle }>
                  <DropdownToggle outline color='primary' className='Planos'>
                                        . . .
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem id='item'><i className='fas fa-i-cursor' />  Renomear</DropdownItem>
                    <DropdownItem id='item'><i className='far fa-envelope' /> Envio por Email</DropdownItem>
                    <DropdownItem id='item'><i className='far fa-file-alt' /> Download TXT</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem id='item'><i className='fa fa-trash-o' /> Deletor</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </span>
            </div>
          </div>
        </div>
        <div className='CV2' />
      </div>
    )
  }
}
export default TopNav
