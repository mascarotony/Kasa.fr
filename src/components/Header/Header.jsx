import React from 'react'
import Nav from '../Nav/Nav'
import Logo from '../../assets/Logo.svg'

import './Header.css'

function Header() {
  return (
    <div className="container">
      <img className="logo" src={Logo} alt="Logo de Kasa"></img>
      <Nav />
    </div>
  )
}

export default Header
