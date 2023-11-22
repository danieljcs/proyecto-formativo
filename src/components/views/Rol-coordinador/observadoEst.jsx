import React, { useState } from 'react';
import Aside from './_aside';

const ObservadorEstudiante = () => {
  const [fecha] = useState(new Date().toLocaleDateString());
  const [pagina, setPagina] = useState('Observado del Estudiante');
  const [gradoSeleccionado, setGradoSeleccionado] = useState('');
  const [nuevoAspecto, setNuevoAspecto] = useState('');
  const [aspectos, setAspectos] = useState([
    '01-Atención y motivación',
    '02-Respeto',
    '03-Mala convivencia',
    '04-Cooperación',
    '05-Responsabilidad',
  ]);
  const [cursoSeleccionado, setCursoSeleccionado] = useState('');
  const [nuevoCriterioCodigo, setNuevoCriterioCodigo] = useState('');
  const [nuevoCriterioDescripcion, setNuevoCriterioDescripcion] = useState('');
  const [criterios, setCriterios] = useState([
    { curso: 'Curso 1', codigo: '01', descripcion: 'Demuestra la capacidad de liderazgo' },
    { curso: 'Curso 2', codigo: '02', descripcion: 'Muestra respeto hacia los demás' },
  ]);

  const agregarAspecto = () => {
    if (nuevoAspecto) {
      setAspectos([...aspectos, nuevoAspecto]);
      setNuevoAspecto('');
    }
  };

  const eliminarAspecto = (index) => {
    const nuevosAspectos = [...aspectos];
    nuevosAspectos.splice(index, 1);
    setAspectos(nuevosAspectos);
  };

  const agregarCriterio = () => {
    if (cursoSeleccionado && nuevoCriterioCodigo && nuevoCriterioDescripcion) {
      setCriterios([
        ...criterios,
        { curso: cursoSeleccionado, codigo: nuevoCriterioCodigo, descripcion: nuevoCriterioDescripcion },
      ]);
      setNuevoCriterioCodigo('');
      setNuevoCriterioDescripcion('');
    }
  };

  const eliminarCriterio = (index) => {
    const nuevosCriterios = [...criterios];
    nuevosCriterios.splice(index, 1);
    setCriterios(nuevosCriterios);
  };

  return (
    <div className='flex h-screen bg-[#A6DCF1]'>
      <Aside />
      <div style={{ backgroundColor: '#A6DCF1', color: 'white', minHeight: '100vh', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

        <div style={{ backgroundColor: '#a883c0', padding: '8px', display: 'flex', justifyContent: 'space-between', width: '50%', margin: 'auto' }}>
          <span onClick={() => setPagina('')}>
            {pagina && (
              <button style={{ borderRadius: '10px', padding: '8px', background: 'none', border: 'none', cursor: 'pointer', color: 'black', fontSize: '14px' }}>
                {'<'}
              </button>
            )}
          </span>
          <h2>{pagina}</h2>
          <span>{fecha}</span>
        </div>

        {pagina === 'Observado del Estudiante' && (
          <div style={{ marginTop: '16px', width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}>

            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '16px', width: '90%' }}>
              <button style={{ borderRadius: '10px', padding: '12px', background: 'none', border: '1px solid white', color: 'black', width: '40%', fontSize: '26px' }}>Observación</button>
              <button style={{ borderRadius: '10px', padding: '12px', background: 'none', border: '1px solid white', color: 'black', width: '40%', fontSize: '26px' }}>Registro de Criterios</button>
            </div>

            <div style={{ border: '1px solid white', borderRadius: '20px', padding: '24px', marginBottom: '86px', maxWidth: '800px', width: '100%', margin: 'auto' }}>
              <h3 style={{ color: 'black', marginBottom: '16px' }}>Registro de Aspectos</h3>
              <div style={{ display: 'flex', marginBottom: '20px', width: '100%' }}>
                <select
                  onChange={(e) => setGradoSeleccionado(e.target.value)}
                  value={gradoSeleccionado}
                  style={{ marginRight: '8px', width: '40%', color: 'black' }}
                >
                  <option value="">Seleccionar Grado</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <input
                  type="text"
                  placeholder="Nuevo Aspecto"
                  value={nuevoAspecto}
                  onChange={(e) => setNuevoAspecto(e.target.value)}
                  style={{ marginRight: '1px', width: '60%', color: 'black' }}
                />
                <button
                  onClick={agregarAspecto}
                  style={{ borderRadius: '10px', padding: '12px', background: '#a883c0', color: 'black', width: '20%', fontSize: '16px' }}
                >
                  +Agregar
                </button>
              </div>
              <ul style={{ paddingInlineStart: '20px', marginBottom: '16px', color: 'black' }}>
                {aspectos.map((aspecto, index) => (
                  <li key={index} style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{aspecto}</span>
                    <button
                      onClick={() => eliminarAspecto(index)}
                      style={{ borderRadius: '10px', padding: '8px', background: 'red', color: 'white', fontSize: '16px' }}
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ border: '1px solid white', borderRadius: '20px', padding: '24px', marginBottom: '16px', maxWidth: '800px', width: '600%', margin: 'auto' }}>
              <h3 style={{ color: 'black', marginBottom: '16px' }}>Registro de Criterios por Aspecto</h3>
              <div style={{ display: 'flex', marginBottom: '16px', width: '100%' }}>
                <input
                  type="text"
                  placeholder="Curso"
                  value={cursoSeleccionado}
                  onChange={(e) => setCursoSeleccionado(e.target.value)}
                  style={{ marginRight: '8px', width: '40%', color: 'black' }}
                />
                <input
                  type="text"
                  placeholder="Nuevo Criterio"
                  value={nuevoCriterioDescripcion}
                  onChange={(e) => setNuevoCriterioDescripcion(e.target.value)}
                  style={{ marginRight: '8px', width: '40%', color: 'black' }}
                />
                <button
                  onClick={agregarCriterio}
                  style={{ borderRadius: '10px', padding: '12px', background: '#a883c0', color: 'black', width: '20%', fontSize: '16px' }}
                >
                  Agregar
                </button>
              </div>
              <ul style={{ paddingInlineStart: '20px', marginBottom: '16px', color: 'black' }}>
                {criterios.map((criterio, index) => (
                  <li key={index} style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <strong>{criterio.codigo}</strong>: {criterio.descripcion}
                    <button
                      onClick={() => eliminarCriterio(index)}
                      style={{ borderRadius: '10px', padding: '8px', background: 'red', color: 'white', fontSize: '16px' }}
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
              <button
                style={{ borderRadius: '10px', padding: '12px', background: '#a883c0', color: 'white', marginTop: '16px', marginLeft: 'auto', display: 'block' }}
              >
                Guardar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ObservadorEstudiante;
