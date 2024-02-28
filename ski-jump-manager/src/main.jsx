import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import StartPage from './pages/StartPage.jsx'
import ChooseCountryPage from './pages/ChooseCountryPage.jsx'
import HomePage from './pages/HomePage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import NationalPage from './pages/NationalPage.jsx'

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
  },
  {
    path: '/nationalPage',
    element: <NationalPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
