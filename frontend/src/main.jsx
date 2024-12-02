import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 //import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />   
  </StrictMode>,
)
// so previously it was app as the entry point but we will change it into router
// the reason of using router is that with react we are not able to make multiple page website that's we are using router. 