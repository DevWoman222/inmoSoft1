import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    contraseña: '',
  });

  const navigate = useNavigate();

  // 👉 Manejo de inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 👉 Fetch para login
  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      email: formData.email,
      contraseña: formData.contraseña,
    };

    try {
      const res = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Credenciales inválidas");
      }

      const result = await res.json(); // espera un objeto JSON
      alert(`Inicio exitoso: ${result.mensaje || result.email}`);
      navigate('/inicio');
    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <div className='login-container'>
      <div className='login-card'>
        <div className="login-logo">
          <img src="/src/assets/logo.png" alt="Logo Inmosoft" />
        </div>
        
        <form className='login-form' onSubmit={handleLogin} noValidate>
          <input 
            type="email" 
            placeholder="Email" 
            required
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <input 
            type="password" 
            placeholder="Contraseña" 
            required
            name="contraseña"
            value={formData.contraseña}
            onChange={handleInputChange}
          />

          <div className='forgot-password'>
            <br />
            <div className='forgot-password'>
              <Link to="/recover">¿Olvidaste tu contraseña?</Link>
            </div>
            <br /><br />
          </div>

          <button type="submit" className='login-button'>Ingresar</button>
        </form>

        <button 
          className="btn btn-primary" 
          onClick={() => navigate('/register')}
        >
          Crear una cuenta
        </button>
      </div>
    </div>
  );
}

export default Login;
