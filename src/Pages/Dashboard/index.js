import React, { Component } from 'react'
import TopNav from './../../Components/TopNav'
import SideNav from './../../Components/SideNav'
import Footer from './../../Components/Footer'
import Header from './../../Components/Header'
import { Button } from 'reactstrap'
import './../../assets/css/dashboard.css'
import './../../assets/css/TopNav.css'
import './../../assets/css/header.css'
export class Dashboard extends Component {
  render () {
    return (
      <div>
        <Header />
        <br />
        <div className='Dashboard'>
          <TopNav />
          <div className='curriculo'>
            <Button className='button'>Criar novo Curriculo</Button>
          </div>
          <br />
          <SideNav />
          <Footer />
        </div>
      </div>
    )
  }
}
