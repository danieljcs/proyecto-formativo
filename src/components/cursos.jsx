

const Cursos = ({titulo, profesor, src}) =>{

    return(
<>
<div className=" flex  flex-col   w-[30%] h-2/5  ">
           <button>
            <img src="s.jpg" alt=""   className="  h-[65%]" />
           </button>
           <div className="bg-white   h-[35%]">
                <p className= "mt-4 ml-2  text-gray-400 font-semibold text-[0.7rem]">
                    1-28 july 2023
                </p>
                <h3 className=" ml-2 font-semibold text-[#0B7077]">
                   {titulo}
                </h3>
           
                <p className="ml-2 mb-4  flex justify-between  font-semibold text-gray-700">{profesor} <img src="Vector.svg" className="w-[1.70rem] mr-4" alt="" /></p>

           </div>
           
        </div>



</>
)




}
export default Cursos