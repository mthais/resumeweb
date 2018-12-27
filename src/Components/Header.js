import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';
import './../assets/css/header.css'
export default class Header extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div className="Header">
          <Navbar color="white" expand="md" light>
            <NavbarBrand href="/">LOGO</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="main-menu" navbar>
                <NavItem>
                  <NavLink>Meus Currículo</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>carta de apresentação</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Empregos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>compartilhar</NavLink>
                </NavItem>
            </Nav>
              <Nav color="white" className=" ml-auto " navbar>
              <Button outline color="primary" size="sm" className="Planos" Style={"font-size : 15px; padding: 0px 15px"}>
              <i class="fa fa-arrow-circle-o-up" Style={"font-size: 25px"}></i> Planos
                </Button>
                <UncontrolledDropdown>
                  <DropdownToggle className="toggledown">
                    Perfil <i class="fa fa-chevron-down"></i>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Conta
                    </DropdownItem>
                    <DropdownItem>
                      Contato
                    </DropdownItem>
                    <DropdownItem>
                      FAQ
                    </DropdownItem>
                    <DropdownItem>
                      Sair
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
  