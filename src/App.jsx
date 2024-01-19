// App.jsx
import React, { useState } from 'react';
import ClickExample from './components/ClickExample';
import InputExample from './components/InputExample';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        alert(`Formulario enviado con: 
               Nombre: ${formData.nombre}, 
               Email: ${formData.email}, 
               Mensaje: ${formData.mensaje}`);
    };

    return (
      <div className="form-container">
          <h1>Formulario con Eventos en React</h1>
          <InputExample formData={formData} handleInputChange={handleInputChange} />
          <ClickExample onSubmit={handleSubmit} />
      </div>
  );

}

export default App;
