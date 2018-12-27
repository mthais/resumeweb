import React, { Component } from 'react';
import './../assets/css/dashboard.css'
class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footer-item">
          <span className="footer-para"> © 2018 Resumeweb</span>
          <br/>
          <a href="#">Politicas e Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Contato</a>
        </div>
      </div>
    );
  }
}

export default Footer;
