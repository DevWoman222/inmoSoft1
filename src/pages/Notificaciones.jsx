// src/pages/Notificaciones.jsx
import React from "react";
import "./notificaciones.css"; // crea este archivo para estilos

const Notificaciones = () => {
  const lista = [
    "📅 Tu Fecha De Pago Está Próxima a Vencer",
    "🏘 Tenemos Un Nuevo Inmueble Para Ti",
    "🛠 ¿Ya Programaste Tu Mantenimiento Anual?",
    "🔔 Conoce Nuestra Nueva Actualización",
    "📨 Visita Pendiente"
  ];

  return (
    <div className="notificaciones-box">
      <h3>Notificaciones</h3>
      <ul>
        {lista.map((mensaje, index) => (
          <li key={index}>{mensaje}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notificaciones;
