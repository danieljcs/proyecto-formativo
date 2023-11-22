import React, { useState, useRef, useEffect } from 'react';
import { BsChevronRight } from "react-icons/bs";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

 
  return (
    <div className='w-full   p-2 items-start h-auto'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`font-bold  text-gray-800 ml-2 flex ${isOpen ? 'bg-purple-2200' : ''}  `}
      > 
      
      
      <BsChevronRight className='mt-[5.5px]  hover:bg-[#88b4c5]  h-6 transition-[2s] p-1  mr-3 rounded-full' />{title }
        
       
      </button>
      {isOpen && (
        <div ref={contentRef} className="px-4 pb-2  pt-4 text-sm  text-gray-500 overflow-auto">
          {children}
          
        </div>
      )}
    </div>
  );
};

const Tematicas = () => {
  return (
    <div className=''>
      <div>
        <section className='w-[100%]  overflow-y-scroll  shadow-[0_8px_20px_20px_rgba(0,0,0,0.08)] p-2 rounded h-2/3'>
          <div className='flex flex-col    gap-2 uppercase text-2xl items-center justify-center p-4 '>
            <Accordion  className=""  title= " General"> 
              Contenido del GeneraLorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda, explicabo ex eveniet quibusdam nemo commodi, blanditiis, possimus non tenetur fuga provident officiis? Error harum velit quas, molestias amet fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda, explicabo ex eveniet quibusdam nemo commodi, blanditiis, possimus non tenetur fuga provident officiis? Error harum velit quas, molestias amet fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda, explicabo ex eveniet quibusdam nemo commodi, blanditiis, possimus non tenetur fuga provident officiis? Error harum velit quas, molestias amet fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda, explicabo ex eveniet quibusdam nemo commodi, blanditiis, possimus non tenetur fuga provident officiis? Error harum velit quas, molestias amet fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda, explicabo ex eveniet quibusdam nemo commodi, blanditiis, possimus non tenetur fuga provident officiis? Error harum velit quas, molestias amet fugit.l
            </Accordion>
            <div className='bg-red-800 h-[1px] w-full'>  </div>
            <Accordion title="Primer Periodo">
              
              Contenido del Primer Periodo loer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ipsa doloremque repudiandae minus ab et a amet sed quisquam, alias veritatis fugiat natus laborum iste laboriosam debitis nostrum aut itaque!loerlore
              LoLorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda, explicabo ex eveniet quibusdam nemo commodi, blanditiis, possimus non tenLorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda, explicabo ex eveniet quibusdam nemo commodi, blanditiis, possimus non tenetur fuga provident officiis? Error harum velit quas, molestias amet fugit.etur fuga provident officiis? Error harum velit quas, molestias amet fugit.rem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda, explicabo ex eveniet quibusdam nemo commodi, blanditiis, possimus non tenetur fuga provident officiis? Error harum velit quas, molestias amet fugit.
            </Accordion>
            
            <div className='bg-red-800 h-[1px] w-full'>  </div>
            <Accordion title="Segundo Periodo">
              Contenido del Segundo Periodo
            </Accordion>
            <div className='bg-red-800 h-[1px] w-full'>  </div>
            <Accordion title="Tercer Periodo">
              Contenido del Tercer Periodo
            </Accordion>
        
           
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tematicas;