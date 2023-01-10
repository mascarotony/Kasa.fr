//Utils
import React from 'react'
import { useEffect, useState } from 'react'

//Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Panel from '../../components/DropPanel/DropPanel'

//Assets
import aboutBanner from '../../assets/About_Banner.webp'
import AboutItems from '../../assets/datas/about'

//Styles
import './About.css'

//Function
function About() {
  const Items = AboutItems()
  const [mode, setMode] = useState('desktop')

  useEffect(() => {
    if (window.innerWidth >= 700) {
      setMode('desktop')
    } else {
      setMode('mobile')
    }
    window.addEventListener('resize', onResize)

    function onResize() {
      if (window.innerWidth >= 700 && mode === 'mobile') {
        setMode('desktop')
      }
      if (window.innerWidth < 700 && mode === 'desktop') {
        setMode('mobile')
      }
    }
  }, [mode])

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
      {Items.map((item) => {
        return <Panel title={item.title} texte={item.text} key={item.id} />
      })}
      <Footer />
    </div>
  )
}

export default About
