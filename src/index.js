//Utils
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Pages
import Home from './pages/Home/Home'
import Logement from './pages/Logement/Logement'
import About from './pages/About/About'
import Error from './pages/Error/Error'

//Router
const router = createBrowserRouter([
  {
    path: '/',
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

//Render
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
