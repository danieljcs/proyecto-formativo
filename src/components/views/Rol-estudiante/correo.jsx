import React from 'react';
import Aside from '../../_aside';
import _navbar from '../../_navbar';


const Correo = () => {
  return (
   <>
    <div className='h-screen flex  w-screen bg-[#A6DCF1]'>
        <div className='w-[15%]    '>
            <Aside/>            

        </div>
      
        
    
    <div className='w-4/5  '>
        <_navbar/>
        <div className=' w-[90%] mx-auto    mt-24  shadow-[0_8px_20px_20px_rgba(0,0,0,0.08)] p-2 rounded-3xl h-4/5'>
            
            <div className='flex flex-col w-full gap-6'>

                    
            <div className=''>
                <label htmlFor="input-1" className=' ml-20  font-medium mr-8'>
                    Asunto
                </label>
                <input type="text"  className='rounded-xl p-2 w-[50%]' placeholder='Ej: cita medica' />
            </div>
            <div className=''>
                <label htmlFor="input-1" className=' ml-20 font-medium mr-8'>
                    Para/Docente
                </label>
                <input type="text"  className='rounded-xl p-2 w-[50%]' placeholder='Ej: cita medica' />
            </div>
            
            

            </div>
            
        </div>
    </div>
    </div>
   </>
  );
}

export default Correo;
