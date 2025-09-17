import React, { useState } from 'react';
import './Flotantes.css';
import { FaWhatsapp, FaBell } from 'react-icons/fa';

const Flotantes = () => {
  const [verNotificaciones, setVerNotificaciones] = useState(false);

  const notificaciones = [
    { id: 1, texto: 'Tu Fecha De Pago Está Próxima a Vencer', icono: '📅' },
    { id: 2, texto: 'Tenemos Un Nuevo Inmueble Para Ti', icono: '🏠' },
    { id: 3, texto: '¿Ya Programaste Tu Mantenimiento Anual?', icono: '🛠️' },
    { id: 4, texto: '¿Conoces Nuestra Nueva Actualización?', icono: '🔄' },
    { id: 5, texto: 'Visita Pendiente', icono: '📌' }
  ];

  return (
    <div className="flotantes-container">
      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/573001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="flotante-btn whatsapp"
        title="Chatea por WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Botón Notificaciones */}
      <div className="campana-container">
        <button
          className="flotante-btn campana"
          onClick={() => setVerNotificaciones(!verNotificaciones)}
          title="Ver notificaciones"
        >
          <FaBell size={22} />
        </button>

        {verNotificaciones && (
          <div className="popup-notificaciones">
            <div className="titulo-popup">Notificaciones</div>
            {notificaciones.map((n) => (
              <div key={n.id} className="notificacion-item">
                <span className="icono">{n.icono}</span>
                <span className="texto">{n.texto}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Flotantes;
