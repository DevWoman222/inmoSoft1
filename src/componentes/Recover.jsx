import React from 'react';
import './Recover.css';
import { useNavigate } from 'react-router-dom';

function Recover() {
const navigate = useNavigate();

const handleSubmit = (e) => {
        e.preventDefault(); // Evita el recargo de la página
        // Aquí iría la lógica para enviar el correo al backend (simulado)
        // Luego redirecciona a la página de verificación
        navigate('/verify-code');
    };

    return (
        <div className='recover-container'>
            <div className='recover-card'>
                <div className='recover-logo'>
                    <img src="/src/assets/logo.png" alt="Logo Inmosoft" />
                </div>
                
                {/* Formulario para recuperar contraseña */}
                <form className="recover-form" onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" required />
                    <button type="submit" className='recover-button'>Recuperar Contraseña</button>
                </form>
                
                <a href="/login" className="back-to-login">Volver al inicio de sesión</a>
            </div>
        </div>
    );
}

// Exporta el componente para usarlo en otras partes del proyecto
export default Recover;