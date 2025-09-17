import React from "react";
import './ResetPassword.css';
import { useNavigate } from "react-router-dom";

function ResetPassword() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.prevenDefault();
        // Aquí  enviar la nueva contraseña al backend
        // Después de cambiarla, puedes redirigir al login
        navigate('/login');

    };
    //retornar a nueva contraseña

return (
<div className='reset-container'>
    <div className='reset-card'>
        <div className='rese'>
            <img src="/src/assets/logo.png" alt="logo Inmosoft" />
        
        </div>
        <form className='reset-form' onSubmit={handleSubmit} >
            <h2>Restablece Contraseña</h2>

            <input
            type="password"
            placeholder="Nueva Contraseña"
            required
        
            />
            <button type="submit" className='reset-button'>
                Guardar Contraseña 
            </button>


        </form>
        <a href="/login" className="back-to-login">Volver Al Inicio De Sesión</a>


    </div>


</div>


);


}

export default ResetPassword;