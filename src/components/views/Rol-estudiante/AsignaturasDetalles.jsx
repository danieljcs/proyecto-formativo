import React from 'react';
import Aside from './_aside';
import { Link, Outlet } from 'react-router-dom';



const AsignaturasDetalles = () => {
  return (
   <>
   <div className=''>
    <div className="flex    font-bold bg-[#A6DCF1] w-screen  ">
 
      <aside className="w-[18%]  flex">
        <Aside/>
      </aside>
      <div className=" max-[1455px]:ml-20  mr-4  w-[80%]  flex-wrap   justify-start items-center ">
      <nav className="w-full h-16   bg-[#925FE2] bg-opacity-30 mt-8 mb-10 rounded-3xl">
  <ul className="flex justify-center items-center h-full gap-6">
    <li className="text-lg font-medium text-white hover:text-purple-800 hover:border-b-4 transition-[4s]  border-purple-600">
      <Link to={"Tematicas"}>Tematicas</Link>
    </li>
    <li className="text-lg font-medium text-white hover:text-purple-800 hover:border-b-2 transition-[4s] border-purple-600 ">
      <Link to={"Asistencias"}>Asistencias</Link>
    </li>
    <li className="text-lg font-medium text-white hover:text-purple-800 hover:border-b-2 transition-[4s] border-purple-600 ">
      <Link to={"Informacion"}>Informacion</Link>
    </li>
    <li className="text-lg font-medium text-white hover:text-purple-800 hover:border-b-2 transition-[4s]  border-purple-600  ">
      <Link to={""}>Calificaciones</Link>
    </li>
  </ul>
</nav>
       
  
     <Outlet>
      
     </Outlet>
    
  </div>
 
</div>

</div>
   
   </>
  );
}

export default AsignaturasDetalles;
