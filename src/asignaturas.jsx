import Aside from "./_aside";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import React, { useState, useEffect } from "react";
import Cursos from "./cursos";


const Asignaturas = () => {


    
return(
<>
<div className="flex  font-bold bg-[#A6DCF1] w-screen  xl: h-screen">
 
        <aside className="w-1/5  xl:w-[18%] flex">
            <Aside/>
        </aside>
    
<div className=" max-[1455px]:ml-20 mr-20 flex overflow-y-scroll   flex-wrap gap-8 w-4/5   justify-start items-center ">
  <nav className="w-full">
  
    <div className= " flex justify-between  uppercase  bg-[#925FE2] bg-opacity-30 p-[0.9rem]   rounded-3xl mr-20 mt-8">
        <HiArrowSmallLeft className="text-3xl" />   <h1 className="text-gray-700 text-center ">   Cursos actuales </h1> <button className="flex low gap-2">Proximos cursos <HiArrowSmallRight className="text-3xl"/></button>
    </div>
<div></div>
    <input type="search " className="p-2 rounded-3xl pr-10 mt-16 ml-20 mb-12 bg-[#F6F6F6] "  placeholder="Buscar asignatura" name="" id="" />
  </nav>
  
        <div className="flex mb-20 flex-wrap gap-10  ">
            <Cursos/>
            <Cursos/>
            <Cursos/>
            <Cursos/>
            <Cursos/>
            <Cursos/>
            <Cursos/>
            <Cursos/>
            <Cursos/>
        </div>
        
        
        
        
        
        
    </div>
        
</div>
</>
)
}
export default Asignaturas