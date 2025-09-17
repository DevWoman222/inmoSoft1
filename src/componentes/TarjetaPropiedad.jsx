import React from 'react';
import './TarjetaPropiedad.css';
import propiedad1 from '../assets/propiedad1.jpg';
import propiedad2 from '../assets/propiedad2.jpg';
import propiedad3 from '../assets/propiedad3.jpg';
import propiedad4 from '../assets/propiedad1.jpg';
import propiedad5 from '../assets/propiedad2.jpg';
import propiedad6 from '../assets/propiedad3.jpg';
import propiedad7 from '../assets/propiedad1.jpg';
import propiedad8 from '../assets/propiedad2.jpg';
import propiedad9 from '../assets/propiedad3.jpg';
import propiedad10 from '../assets/propiedad1.jpg';
import propiedad11 from '../assets/propiedad2.jpg';
import propiedad12 from '../assets/propiedad3.jpg';


function TarjetaPropiedad() {
  const propiedades = [
    {
      id: 1,
      titulo: 'Apartamento en Laureles',
      ubicacion: 'Medellín, Laureles',
      operacion: 'Venta',
      precio: '$350.000.000',
      imagen: propiedad1,
    },
    {
      id: 2,
      titulo: 'Casa en Envigado',
      ubicacion: 'Envigado, San Marcos',
      operacion: 'Venta',
      precio: '$480.000.000',
      imagen: propiedad2,
    },
    {
      id: 3,
      titulo: 'Oficina en El Poblado',
      ubicacion: 'Medellín, El Poblado',
      operacion: 'Venta',
      precio: '$1.200.000.000',
      imagen: propiedad3,
    },
    {
      id: 4,
      titulo: 'Lote en Rionegro',
      ubicacion: 'Rionegro, Llanogrande',
      operacion: 'Venta',
      precio: '$950.000.000',
      imagen: propiedad4,
    },
    {
      id: 5,
      titulo: 'Apartamento en Sabaneta',
      ubicacion: 'Sabaneta, Las Lomitas',
      operacion: 'Arriendo',
      precio: '$2.500.000 / mes',
      imagen: propiedad5,
    },
    {
      id: 6,
      titulo: 'Casa campestre en Guarne',
      ubicacion: 'Guarne, Vereda La Honda',
      operacion: 'Venta',
      precio: '$650.000.000',
      imagen: propiedad6,
    },
    {
      id: 7,
      titulo: 'Oficina en Centro',
      ubicacion: 'Medellín, Centro',
      operacion: 'Arriendo',
      precio: '$1.000.000 / mes',
      imagen: propiedad7,
    },
    {
      id: 8,
      titulo: 'Apartamento en Bello',
      ubicacion: 'Bello, Niquía',
      operacion: 'Venta',
      precio: '$220.000.000',
      imagen: propiedad8,
    },
    {
      id: 9,
      titulo: 'Apartamento en Itagüí',
      ubicacion: 'Itagüí, Ditaires',
      operacion: 'Arriendo',
      precio: '$1.800.000 / mes',
      imagen: propiedad9,
    },
    {
      id: 10,
      titulo: 'Casa en Copacabana',
      ubicacion: 'Copacabana, Machado',
      operacion: 'Venta',
      precio: '$300.000.000',
      imagen: propiedad10,
    },
    {
      id: 11,
      titulo: 'Apartamento en Poblado',
      ubicacion: 'Medellín, Poblado',
      operacion: 'Venta',
      precio: '$800.000.000',
      imagen: propiedad11,
    },
    {
      id: 12,
      titulo: 'Lote industrial',
      ubicacion: 'Girardota, Zona industrial',
      operacion: 'Venta',
      precio: '$1.500.000.000',
      imagen: propiedad12,
    },
  ];

  return (
    <div className="tarjetas-destacadas">
      <div class="center-box">
      <h2>DESTACADAS DEL MES</h2>
      </div>

      <div className="grid-tarjetas">
        {propiedades.map((prop) => (
          <div key={prop.id} className="tarjeta-propiedad">
            <img src={prop.imagen} alt="Inmueble" className="imagen-inmueble" />
            <div className="info-propiedad">
              <p className="ubicacion">{prop.ubicacion}</p>
              <p className="operacion">{prop.operacion}</p>
              <p className="precio">{prop.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TarjetaPropiedad;
