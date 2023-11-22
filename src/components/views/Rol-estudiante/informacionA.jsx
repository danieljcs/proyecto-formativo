import React from 'react';

const InformacionA = () => {
  return (
    <div className="flex justify-start items-center  ">
      <div className="bg-blue-200 rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Matemáticas Avanzadas</h1>
        <p className="text-gray-800 text-lg mb-6">Horario: Lunes a Viernes, 9:00 AM - 11:00 AM</p>
        <p className="text-gray-800 text-lg mb-6">Profesor: Carlos Rigoberto</p>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Contenido del curso:</h2>
          <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sem vitae risus efficitur aliquet. Ut posuere mattis felis, eget finibus quam cursus et. Proin ullamcorper metus id erat interdum, at finibus dolor lacinia. Sed eu hendrerit sapien.</p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Recursos:</h2>
          <ul className="text-gray-800">
            <li>Recurso 1</li>
            <li>Recurso 2</li>
            <li>Recurso 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InformacionA;