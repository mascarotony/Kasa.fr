//Utils
import React from 'react'
import { Link } from 'react-router-dom'

//Components
import Header from '../../components/Header/Header'

//Style
import './Error.css'

//Function
function Error() {
  return (
    <div>
      <Header />
      <div className="errorBloc">
        <strong>404</strong>
        <p>Oups! La page que vous demandez nexiste pas.</p>
        <Link to="/Kasa.fr">Retourner à la page d'accueil</Link>
      </div>
    </div>
  )
}

export default Error
