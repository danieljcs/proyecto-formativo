import React, { useState, useRef } from 'react';
import { FaCircle } from 'react-icons/fa';
import './App.css'; // Asegúrate de tener un archivo CSS para estilizar tu formulario

const App = () => {
  const [formValues, setFormValues] = useState({
    titular: '',
    cedula: '',
    celular: '',
    correo: '',
    clienteSolicita: '',
    seInforma: '',
    fono: false,
    whatsapp: false,
    asesorVirtual: false,
    llamadaSalida: false,
  });

  const formContainerRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheckboxChange = (name) => {
    setFormValues({ ...formValues, [name]: !formValues[name] });
  };

  const handleGenerate = () => {
    // Aquí puedes hacer lo que necesites con la información generada
    console.log('Información generada:', formValues);
  };

  const handleCopy = () => {
    // Aquí puedes copiar la información al portapapeles
    const formContainer = formContainerRef.current;
    const range = document.createRange();
    range.selectNode(formContainer);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  };

  const handleClear = () => {
    // Aquí puedes reiniciar los valores del formulario
    setFormValues({
      titular: '',
      cedula: '',
      celular: '',
      correo: '',
      clienteSolicita: '',
      seInforma: '',
      fono: false,
      whatsapp: false,
      asesorVirtual: false,
      llamadaSalida: false,
    });
  };

  return (
    <div className="App">
      <div className="form-container" ref={formContainerRef}>
        <h1>Formulario Unificado</h1>
        <div className="form-row">
          <label htmlFor="titular">Titular:</label>
          <input
            type="text"
            id="titular"
            name="titular"
            value={formValues.titular}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="cedula">Cédula:</label>
          <input
            type="text"
            id="cedula"
            name="cedula"
            value={formValues.cedula}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="celular">Celular:</label>
          <input
            type="text"
            id="celular"
            name="celular"
            value={formValues.celular}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="correo">Correo Electrónico:</label>
          <input
            type="text"
            id="correo"
            name="correo"
            value={formValues.correo}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="clienteSolicita">Cliente Solicita:</label>
          <input
            type="text"
            id="clienteSolicita"
            name="clienteSolicita"
            style={{ width: '100%' }}
            value={formValues.clienteSolicita}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="seInforma">Se Informa:</label>
          <input
            type="text"
            id="seInforma"
            name="seInforma"
            style={{ width: '100%' }}
            value={formValues.seInforma}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label>Fono:</label>
          <FaCircle
            className={formValues.fono ? 'active-circle' : 'inactive-circle'}
            onClick={() => handleCheckboxChange('fono')}
          />
        </div>
        <div className="form-row">
          <label>WhatsApp:</label>
          <FaCircle
            className={formValues.whatsapp ? 'active-circle' : 'inactive-circle'}
            onClick={() => handleCheckboxChange('whatsapp')}
          />
        </div>
        <div className="form-row">
          <label>Asesor Virtual:</label>
          <FaCircle
            className={formValues.asesorVirtual ? 'active-circle' : 'inactive-circle'}
            onClick={() => handleCheckboxChange('asesorVirtual')}
          />
        </div>
        <div className="form-row">
          <label>Llamada de Salida:</label>
          <FaCircle
            className={formValues.llamadaSalida ? 'active-circle' : 'inactive-circle'}
            onClick={() => handleCheckboxChange('llamadaSalida')}
          />
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleGenerate}>Generar</button>
        <button onClick={handleCopy}>Copiar</button>
        <button onClick={handleClear}>Limpiar</button>
      </div>
    </div>
  );
};

export default App;
