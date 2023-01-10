//Utils
import React from 'react'
import { NavLink } from 'react-router-dom'

//Style
import './Nav.css'

function Nav() {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'activated' : 'link')}
              end
            >
              Acceuil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'activated' : 'link')}
              end
            >
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
