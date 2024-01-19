// InputExample.jsx
import React from 'react';

const InputExample = ({ formData, handleInputChange }) => {
    return (
        <div>
            <input
                className="form-input"
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder="Nombre"
            />
            <input
                className="form-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
            />
            <textarea
                className="form-textarea"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                placeholder="Mensaje"
            />
        </div>
    );
};

export default InputExample;
