import React from 'react'
import ReactDOM from 'react-dom/client'
import './src/assets/css/index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './src/components/Home.jsx'
import Horario from './src/components/horario.jsx'
import Asignaturas from './src/components/asignaturas.jsx'
import Formulario from './src/components/InicioSesion.jsx'
import AsignaturasDetalles from './src/components/AsignaturasDetalles.jsx'








const router = createBrowserRouter([
{
path:"/login",
element :<Formulario/>
},
{
path:"/DetallesAsignatura:id",
element :<AsignaturasDetalles/>
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
