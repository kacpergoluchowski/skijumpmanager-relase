import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import StartPage from './pages/StartPage.jsx'
import ChooseCountryPage from './pages/ChooseCountryPage.jsx'
import HomePage from './pages/HomePage.jsx'
import TeamPage from './pages/TeamPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />
  },
  {
    path: '/chooseCountry',
    element: <ChooseCountryPage />
  }, 
  {
    path: '/home',
    element: <HomePage />
  }, 
  {
    path: '/team',
    element: <TeamPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
