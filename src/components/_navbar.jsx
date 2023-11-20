import React from 'react';

const _navbar = () => {
  return (
    <div>
      <nav className='bg-[#A6DCF1] flex justify-between items-center p-4'>
        <div>
          
        </div>
        <div className='flex items-center gap-2'>
          <div className='h-10 w-10 overflow-hidden rounded-full'>
            <img src="https://iedsangabriel.com/assets/img/logo.png" alt="" className='w-full h-full object-cover' />
          </div>
          <div>
            <h4 className='text-white'>Andres Cavadia</h4>
            <p className='text-gray-800'>Estudiante</p>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default _navbar;
