//Utils
import React from 'react'

//Assets
import Nav from '../Nav/Nav'
import Logo from '../../assets/Logo.svg'

//Style
import './Header.css'

//Function
function Header() {
  return (
    <div className="container">
      <img className="logo" src={Logo} alt="Logo de Kasa"></img>
      <Nav />
    </div>
  )
}

export default Header
