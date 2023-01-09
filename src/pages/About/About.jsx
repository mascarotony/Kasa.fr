import React from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import aboutBanner from '../../assets/About_Banner.webp'

import './About.css'

function About() {
  return (
    <div className="aboutPage">
      <Header />
      <div className="aboutBanner">
        <img
          className="aboutBannerImg"
          src={aboutBanner}
          alt="Paysage montagneux ensoleillé"
        />
      </div>
      <Footer />
    </div>
  )
}

export default About
