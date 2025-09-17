import React from 'react';
import './FiltrosAvanzados.css';

const FiltrosAvanzados = () => {
  return (
    <div className="filtros-avanzados">
      {/* Precio */}
      <select>
        <option>Precio Mínimo</option>
        <option>$500.000</option>
        <option>$1.000.000</option>
        <option>$2.000.000</option>
        <option>$5.000.000</option>
      </select>

      <select>
        <option>Precio Máximo</option>
        <option>$1.000.000</option>
        <option>$2.000.000</option>
        <option>$5.000.000</option>
        <option>$10.000.000</option>
      </select>

      {/* Área */}
      <select>
        <option>Área Mínima (m²)</option>
        <option>30</option>
        <option>50</option>
        <option>80</option>
        <option>100</option>
      </select>

      <select>
        <option>Área Máxima (m²)</option>
        <option>100</option>
        <option>150</option>
        <option>200</option>
        <option>300</option>
      </select>

      {/* Habitaciones */}
      <select>
        <option>Habitaciones</option>
        <option>1+</option>
        <option>2+</option>
        <option>3+</option>
        <option>4+</option>
      </select>

      {/* Baños */}
      <select>
        <option>Baños</option>
        <option>1+</option>
        <option>2+</option>
        <option>3+</option>
      </select>

      {/* Parqueadero */}
      <select>
        <option>Parqueadero</option>
        <option>1</option>
        <option>2</option>
        <option>3+</option>
      </select>

      {/* Características adicionales */}
      <div className="checkbox-group">
        <input type="checkbox" id="piscina" />
        <label htmlFor="piscina">Piscina</label>
      </div>

      <div className="checkbox-group">
        <input type="checkbox" id="balcon" />
        <label htmlFor="balcon">Balcón</label>
      </div>

      <div className="checkbox-group">
        <input type="checkbox" id="deposito" />
        <label htmlFor="deposito">Depósito</label>
      </div>

      <div className="checkbox-group">
        <input type="checkbox" id="ascensor" />
        <label htmlFor="ascensor">Ascensor</label>
      </div>

      {/* Botón aplicar */}
      <button className="btn-aplicar">Aplicar filtros</button>
    </div>
  );
};

export default FiltrosAvanzados;
