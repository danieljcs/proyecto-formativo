import { BiUser } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

import React, { useState } from 'react';








const Aside = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };

  return (
<>
<div className='flex'>
<button
          id="menu-btn"
          className=" lg:hidden  bg-gray-600 text-center text-white p-3  rounded"
         
        >
          |||
    </button>
<div className=" hidden lg:flex flex-col   w-[233px] h-screen  overflow-y-scroll   bg-gradient-to-t from-indigo-700 via-indigo-500 to-indigo-400 ">
 
    <li className="flex justify-center m-8  ">
            <li className="w-32 h-32 bg-gradient-to-b from-violet-200 to-white rounded-[32px]" />
    
    </li>
    <ul className="flex-col space-y-2 justify-center pl-3  gap-4 inline-flex items">
        <li className="justify-start items-center gap-3 inline-flex">
            <a href="/home"className="text-center text-zinc-100 text-base font-semibold font-semibold" >Inicio</a>
        </li>
        <li className="justify-start items-center gap-2 inline-flex">
        <BiUser className='text-white ml-2' /> <a href=""className="text-center text-zinc-100 text-base font-semibold font-semibold" >Usuario </a>
        </li>
        <li className="justify-start items-center gap-3 inline-flex">
            <a href="/Asignaturas"className="text-center text-zinc-100 text-base  font-semibold" >Mis asignaturas</a>
        </li>
        <li className="justify-start items-center gap-3 inline-flex">
            <a href=""className="text-center text-zinc-100  font-semibold" >Calendario</a>
        </li>
        <li className="justify-start items-center gap-3 inline-flex">
            <a href=""className="text-center text-zinc-100 text-base font-semibold" >Notas</a>
        </li>
        <li className="justify-start items-center gap-3 inline-flex">
            <a href=""className="text-center text-zinc-100 text-base  font-semibold" >Observaciones </a>
        </li>
        <li className="justify-start items-center gap-3 inline-flex">
            <a href=""className="text-center text-zinc-100 text-base  font-semibold" >Correo </a>
        </li>
        <li className="justify-start items-center gap-3 inline-flex">
            <a href="/Horario"className="text-center text-zinc-100 text-base  font-semibold" >Horario de clases</a>
        </li>
        <li className="justify-start items-center gap-3 inline-flex">
            <a href=""className="text-center text-zinc-100 text-base  font-semibold" >Himno institucional </a>
        </li>
        <li className="justify-start items-center gap-2 inline-flex">
        <FiSettings className='text-white ml-2' /> <a href=""className="text-center text-zinc-100 text-base font-semibold font-semibold" >Configuracion </a>
        </li>
        
        <li className="justify-start items-center  mt-4 inline-flex">
             <a className="text-center text-white text-opacity-75 text-base  font-semibold" href="">Cerrar Sesión</a>
        </li>

       
      
          
          
        </ul>
    </div>

</div>
</> 

  );
};

export default Aside;
