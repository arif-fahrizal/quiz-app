import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/home'
import { ScorePage } from './pages/score'
import ContactPage from './pages/contact'
import { DataProvider } from './context/context'
import React from 'react'
import { Quiz } from './pages/quiz'
import { Loading } from './component/Loading'
import { AuthPage } from './pages/authentication'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'/login',
    element: <AuthPage />
  },
  {
    path:'/score',
    element: <ScorePage />
  },
  {
    path:'/contact',
    element: <ContactPage />
  },
  {
    path:'/quiz',
    element: <Quiz />
  },
  {
    path:'/loading',
    element: <Loading />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>,
)
