//Utils
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carousel from '../../components/Carousel/Carousel'
import DropPanel from '../../components/DropPanel/DropPanel'

//Page
import Error from '../Error/Error'

//Assets & Datas
import cardItems from '../../assets/datas/logements'

//Style
import './Logement.css'

//Function
function Logement() {
  const { id } = useParams()
  const [item, setItem] = useState()

  useEffect(() => {
    const foundItem = cardItems.find((card) => card.id === id)

    setItem(foundItem)
  }, [id])

  if (!item) {
    return <Error />
  }

  const listEquipments = item.equipments.map((equipment) => (
    <li key={equipment}>{equipment}</li>
  ))

  return (
    <div className="logementPage">
      <Header />
      <div className="logementBloc">
        <div className="carouselBloc">
          <Carousel pictures={item.pictures}></Carousel>
        </div>
        <div className="content">
          <div className="leftBloc">
            <div className="location">
              <b>{item.title}</b>
              <p>{item.location}</p>
            </div>
            <div className="tags">
              <ul>
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rigthBloc">
            <div className="LvlRating"></div>

            <div className="host">
              <p>{item.host.name}</p>
              <img src={item.host.picture} alt="host" />
            </div>
          </div>
        </div>

        <div className="descriptionBloc">
          <DropPanel texte={item.description} title="Déscription" />
          <DropPanel texte={listEquipments} title="Équipements" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Logement
