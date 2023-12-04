import { useState } from 'react';

import _aside from '../../_aside';

const Informacion = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    direccion: '',
    numeroDocumento: '',
    tipoDocumento: '',
    numeroTelefono: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDeletePhoto = () => {
    // Lógica para eliminar la foto
    console.log('Foto eliminada');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className='flex min-h-screen bg-[#A6DCF1]'>
      <_aside />
      <div className='flex flex-col mx-auto w-full p-4 bg-[#A6DCF1]'>
        <div className='flex'>
          <div className='w-2/3 bg-[#A6DCF1] p-6 rounded shadow'>
            <h2 className='text-3xl font-bold mb-4'>Información Básica</h2>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-wrap mb-4'>
                <div className='w-full sm:w-1/2 pr-2 mb-4 sm:mb-0 flow-root'>
                  <div className='sm:w-1/2 float-left'>
                    <label htmlFor='nombre' className='block font-bold mb-2'>
                      Nombre:
                    </label>
                    <input
                      type='text'
                      name='nombre'
                      placeholder=' Juan'
                      value={formData.nombre}
                      onChange={handleChange}
                      className='border p-2 rounded'
                    />
                  </div>
                  <div className='sm:w-1/2  float-left'>
                    <label htmlFor='apellido' className='block font-bold mb-2'>
                      Apellido:
                    </label>
                    <input
                      type='text'
                      name='apellido'
                      placeholder=' Pérez'
                      value={formData.apellido}
                      onChange={handleChange}
                      className='border p-2 rounded'
                    />
                  </div>
                </div>
              </div>

              <div className='mb-4'>
                <label htmlFor='correo' className='block font-bold mb-2'>
                  Correo:
                </label>
                <input
                  type='email'
                  name='correo'
                  placeholder=' juanprez2021.com'
                  value={formData.correo}
                  onChange={handleChange}
                  className='border p-2 rounded w-2/5'
                />
              </div>

              <div className='mb-4'>
                <label htmlFor='direccion' className='block font-bold mb-2'>
                  Dirección:
                </label>
                <input
                  type='text'
                  name='direccion'
                  placeholder=' Calle 123'
                  value={formData.direccion}
                  onChange={handleChange}
                  className='border p-2 rounded w-2/5'
                />
              </div>

              <div className='mb-4'>
                <label htmlFor='numeroDocumento' className='block font-bold mb-2'>
                  Número de Documento:
                </label>
                <input
                  type='text'
                  name='numeroDocumento'
                  placeholder=' 123456789'
                  value={formData.numeroDocumento}
                  onChange={handleChange}
                  className='border p-2 rounded w-2/5'
                />
              </div>

              <div className='mb-4'>
                <label htmlFor='tipoDocumento' className='block font-bold mb-2'>
                  Tipo de Documento:
                </label>
                <input
                  type='text'
                  name='tipoDocumento'
                  placeholder=' DNI'
                  value={formData.tipoDocumento}
                  onChange={handleChange}
                  className='border p-2 rounded w-2/5'
                />
              </div>

              <div className='mb-4'>
                <label htmlFor='numeroTelefono' className='block font-bold mb-2'>
                  Número de Teléfono:
                </label>
                <input
                  type='text'
                  name='numeroTelefono'
                  placeholder=' 123456789'
                  value={formData.numeroTelefono}
                  onChange={handleChange}
                  className='border p-2 rounded w-2/5'
                />
              </div>

              
              <div className='flex items-center space-x-2'>
                <button type='submit' className='bg-purple-500 text-white p-2 rounded'>
                  Guardar
                </button>
              </div>
              <div className=' float-left w-1/3 p-6 '>
           
          
         
          </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Informacion;