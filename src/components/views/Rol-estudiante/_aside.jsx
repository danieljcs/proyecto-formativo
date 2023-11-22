import { BiUser } from 'react-icons/bi';
import { BsGear } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import React, { useState } from 'react';
import { LiaBookSolid } from "react-icons/lia";
import { LiaPenSolid } from "react-icons/lia";
import { LuBookOpen } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { LuPanelLeft } from "react-icons/lu";
import { BsPower } from "react-icons/bs";
import { BsQuote } from "react-icons/bs";
import { Link } from 'react-router-dom';






const Aside = () => {
   
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
    <Link className="flex justify-center items-center mb-12 mt-4  " to={'/Home'}> 
        <img src="https://iedsangabriel.com/assets/img/logo.png" alt="" />   
    </Link>
    <ul className="flex-col  justify-start space-y-2  pl-3   gap-4 inline-flex items">
        <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2  inline-flex">
            <LuPanelLeft className='text-white  '/><Link to={'/Home'} className="text-center text-zinc-100 text-base font-semibold" >Inicio </Link>
        </li>
        <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
            <BiUser className='text-white' /> <Link  className="text-center text-zinc-100 text-base font-semibold" >Usuario </Link>
        </li>
        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
            <LuBookOpen className='text-white  '/> <Link to={'/Asignaturas'} className="text-center text-zinc-100 text-base font-semibold" >Mis asignaturas </Link>
        </li>
        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
            <BsCalendar3 className='text-white  '/><Link to={'/'} className="text-center text-zinc-100 text-base font-semibold" >Calendario </Link>
        </li>
        <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
            <LiaBookSolid className='text-white  '/><Link to={'/'} className="text-center text-zinc-100 text-base font-semibold" >Notas</Link>
        </li>
        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
            <LiaPenSolid className='text-white  '/><Link to={'/Observaciones'} className="text-center text-zinc-100 text-base font-semibold" >Observaciones</Link>
        </li>
        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
            <BsEnvelope className='text-white  '/> <Link to={'/correo'} className="text-center text-zinc-100 text-base font-semibold" >Correo</Link>
        </li>
        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
            <LuCalendar className='text-white  '/><Link to={'/Horario'} className="text-center text-zinc-100 text-base font-semibold" >Horario de clases</Link>
        </li>
        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
        <BsQuote className='text-white  '/><Link to={'/Himno'} className="text-center text-zinc-100 text-base font-semibold" >Himno intitucional</Link>
        </li>
        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
        <BsGear className='text-white ' /> <a href=""className="text-center text-zinc-100 text-base font-semibold font-semibold" >Configuracion </a>
        </li>
        
        <li className="hover:scale-[1.09] transition-[2s] items-center  inline-flex ">
            <BsPower className='text-white  '/><a className="text-center  text-white text-opacity-75 text-base ml-2  font-semibold" href="">Cerrar Sesión</a>
        </li>

       
      
          
          
        </ul>
    </div>

</div>
</> 

  );
};

export default Aside;
