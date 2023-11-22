import React from 'react'
import ReactDOM from 'react-dom/client'
import './src/assets/css/index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './src/components/views/Rol-estudiante/Home.jsx'
import Horario from './src/components/views/Rol-estudiante/horario.jsx'
import Asignaturas from './src/components/views/Rol-estudiante/asignaturas.jsx'
import Formulario from './src/components/views/Rol-estudiante/InicioSesion.jsx'
import AsignaturasDetalles from './src/components/views/Rol-estudiante/AsignaturasDetalles.jsx'
import Correo from './src/components/views/Rol-estudiante/correo.jsx'
import Tematicas from'./src/components/views/Rol-estudiante/tematicas.jsx'
import InformacionA from './src/components/views/Rol-estudiante/informacionA.jsx'
import Observaciones from './src/components/views/Rol-estudiante/observaciones.jsx'
import Asistencia from './src/components/views/Rol-estudiante/asistencia.jsx'
import Himno from './src/components/views/Rol-estudiante/himno.jsx'














const router = createBrowserRouter([
{
path:"/login",
element :<Formulario/>
},
{
path:"/DetallesAsignatura",
element :<AsignaturasDetalles/>,
children:[{

    path:"Tematicas",
    element:<Tematicas/> 
    
},
{
  path:"Informacion",
  element:<InformacionA/>
},
{
  path:"Asistencias",
  element:<Asistencia/>
}

]
  

},


{
  path:"/Home",
  element :<Home/>
},
{
path:"/Himno",
element:<Himno/>
},
{
  path:"/Observaciones",
  element :<Observaciones/>
},
{
    path:"/Horario",
    element :<Horario/>
},
{
    path:"/Asignaturas",
    element :<Asignaturas/>,
  
},
{
  path:"/Correo",
  element:<Correo/>
}






])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider   router ={router}/>
  </React.StrictMode>,
)
