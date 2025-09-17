import React from "react";
import './VerifyCode.css';
import { useNavigate } from "react-router-dom";

function VerifyCode() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // corregido
    // Aquí validar el código (simulado)
    navigate('/reset-password');
  };

  return (
    <div className='verify-container'>
      <div className='verify-card'>
        <div className='verify-logo'>
          <img src="/src/assets/logo.png" alt="Logo Inmosoft" />
        </div>

        <form className="verify-form" onSubmit={handleSubmit}>
          <p className="verify-instructions">
            Ingresa el código que enviamos a tu correo electrónico.
          </p>

          <input
            type="text"
            placeholder="Código de verificación"
            required
          />

          <button type="submit" className="verify-button">
            Verificar
          </button>
        </form>

        <a href="/recover" className="back-link">Volver</a>
      </div>
    </div>
  );
}

export default VerifyCode;
