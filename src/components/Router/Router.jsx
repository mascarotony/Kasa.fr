//Utils
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

//Pages
import Home from '../../pages/Home/Home'
import Logement from '../../pages/Logement/Logement'
import About from '../../pages/About/About'
import Error from '../../pages/Error/Error'

//Router
const router = createBrowserRouter([
  {
    path: '/Kasa.fr',
    element: <Home />,
  },
  {
    path: '/logement/:id',
    element: <Logement />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/*',
    element: <Error />,
  },
])

export default router
