// pages/Filtros.jsx
import React, { useState } from 'react';
import './Filtros.css'; // Estilos principales
import FiltrosAvanzados from '../componentes/FiltrosAvanzados.jsx'; // Asegúrate que la ruta sea correcta

const Filtros = () => {
  const [mostrarAvanzados, setMostrarAvanzados] = useState(false);

  return (
    <div className="busqueda-card">
      <div className="botones-superiores">
        <button className="active">ARRIENDO</button>
        <button>COMPRA</button>
      </div>

      <div className="campos">
        <select>
          <option>CIUDAD</option>
        </select>
        <select>
          <option>CÓDIGO</option>
        </select>
        <select>
          <option>TIPO DE INMUEBLE</option>
        </select>

        <button
          className="btn buscar"
          onClick={() => setMostrarAvanzados(!mostrarAvanzados)}
        >
          Filtros
        </button>
      </div>

      {mostrarAvanzados && <FiltrosAvanzados />}

      <div className="acciones">
        <button className="btn buscar">BUSCAR</button>
      </div>
    </div>
  );
};

export default Filtros;

