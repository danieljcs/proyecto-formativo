import { useState } from 'react'
import Aside from "./_aside"
import _navbar from './_navbar'




const  Home = () => {


  return (
<>
  <div className='h-screen flex bg-[#A6DCF1] '>
    <div className='w-1/5'>
      <Aside/>
    </div>
    <div className='w-4/5'>
      <_navbar/>
   
      <div className='w-[90%] flex items-center  justify-around  rounded-2xl bg-gradient-to-t from-indigo-700 via-indigo-500 to-indigo-400 h-[20rem]'>
        <div>
          <h1 className='text-white font-bold text-[2.5rem]'>Bienvenido Estudiante</h1>
          <p>Nos complace volverte a ver</p>
        </div>
        <div className='w-1/2' >
          <img src="Scholarcap scroll.png" alt=""   className='  h-72 ' />
        </div>
       </div>

    </div>

   
  </div>
</>
)
}

export default Home
