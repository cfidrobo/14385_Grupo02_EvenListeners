// ClickExample.jsx
const ClickExample = ({ onSubmit }) => {
    return (
        <button className="form-button" onClick={onSubmit}>
            Enviar Formulario
        </button>
    );
};

export default ClickExample;
