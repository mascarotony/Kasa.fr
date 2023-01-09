import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import homeBanner from '../../assets/Home_Banner.webp'
import cardItems from '../../assets/datas/logements'

import './Home.css'

function Home() {
  const LogementsCard = () => (
    <div className="cardList">
      {cardItems.map((item) => {
        return (
          <Link key={item.id} to={`/logement/${item.id}`}>
            <div className="card">
              <img src={item.cover} alt={item.title} />
              <b>{item.title}</b>
            </div>
          </Link>
        )
      })}
    </div>
  )

  return (
    <div className="homePage">
      <Header />
      <div className="homeBanner">
        <p>Chez vous, partout et ailleurs</p>
        <img
          className="homeBannerImg"
          src={homeBanner}
          alt="Paysage montagneux en bord de mer"
        />
      </div>
      <LogementsCard />
      <Footer />
    </div>
  )
}

export default Home
