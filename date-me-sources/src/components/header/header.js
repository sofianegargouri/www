import React, { Component } from 'react'

import './header.css'

import logo from '../../images/logo.png'

class Header extends Component {
  render() {
    return <header>
      <img src={logo} alt="logo" />
    </header>
  }
}

export default Header
