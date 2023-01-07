import React from 'react'
import LogoWhite from '../../assets/White_Logo.svg'

import './Footer.css'

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
