//Utils
import React from 'react'

//Assets
import LogoWhite from '../../assets/White_Logo.svg'

//Style
import './Footer.css'

//Function
function Footer() {
  return (
    <div className="footer-container">
      <img src={LogoWhite} alt="Logo de Kasa" />
      <p>
        <span>©</span> 2020 Kasa. All rights reserved
      </p>
    </div>
  )
}

export default Footer
