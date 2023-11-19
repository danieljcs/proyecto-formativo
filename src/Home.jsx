import { useState } from 'react'
import Aside from './_aside'




const  Home = () => {


  return (
<>
  <div className='h-screen flex'>
    <Aside/>
    <div className=' w-1/2 h-1/2 mx-auto rounded-xl  flex bg-red-800' >
      <h1>Bienvenido Coordinador</h1>
    </div>
  </div>
</>
)
}

export default Home
