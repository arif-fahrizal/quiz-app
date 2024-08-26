import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/home'
import { LoginPage } from './pages/login'
import { ScorePage } from './pages/score'
import ContactPage from './pages/contact'
import { DataProvider } from './context/context'
import React from 'react'


const router = createBrowserRouter([
  {
    // path:'/',
    path:'/trivia-app/',
    element: <Home />
  },
  {
    // path:'/login',
    path:'/trivia-app/login',
    element: <LoginPage />
  },
  {
    // path:'/score',
    path:'/trivia-app/score',
    element: <ScorePage />
  },
  {
    // path:'/contact',
    path:'/trivia-app/contact',
    element: <ContactPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>,
)
