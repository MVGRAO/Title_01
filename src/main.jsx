/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Components/pages/Home.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';


import './index.css'
import App from './App.jsx'

const router=createBrowserRouter([{path:"/",element:<Home/>}])

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
   <StrictMode>
    <App/>
  </StrictMode>,
 </BrowserRouter>
)
