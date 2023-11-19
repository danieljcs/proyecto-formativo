import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import _aside from './_aside.jsx'
import Horario from './horario.jsx'
import Asignaturas from './asignaturas.jsx'
import Formulario from './inicioSesion.jsx'





const router = createBrowserRouter([
{
path:"/login",
element :<Formulario/>
},

{
  path:"/Home",
  element :<Home/>
},
{
    path:"/Horario",
    element :<Horario/>
},
{
    path:"/Asignaturas",
    element :<Asignaturas/>
},






])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider   router ={router}/>
  </React.StrictMode>,
)
