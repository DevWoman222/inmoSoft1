import React, { useState } from 'react';
import './Proyectos.css';

const Proyectos = () => {
  const [filtroActivo, setFiltroActivo] = useState('todos');

  const proyectos = [
    {
      id: 1,
      nombre: "Residencial Vista Verde",
      ubicacion: "Medellín, Antioquia",
      tipo: "residencial",
      precio: "Desde $280,000,000",
      estado: "En construcción",
      entrega: "Junio 2025",
      habitaciones: "2-3",
      areas: "65-85 m²",
      imagen: "/api/placeholder/400/300",
      caracteristicas: ["Gimnasio", "Piscina", "Zona BBQ", "Parqueadero"],
      descripcion: "Moderno conjunto residencial con acabados de primera calidad y excelente ubicación."
    },
    {
      id: 2,
      nombre: "Torre Empresarial Centro",
      ubicacion: "Bello, Antioquia",
      tipo: "comercial",
      precio: "Desde $450,000,000",
      estado: "Disponible",
      entrega: "Inmediata",
      areas: "45-120 m²",
      imagen: "/api/placeholder/400/300",
      caracteristicas: ["Recepción 24/7", "Ascensores", "Parqueadero", "Seguridad"],
      descripcion: "Oficinas modernas en el corazón comercial de la ciudad con excelente conectividad."
    },
    {
      id: 3,
      nombre: "Conjunto Campestre Las Palmas",
      ubicacion: "Las Palmas, Antioquia",
      tipo: "campestre",
      precio: "Desde $850,000,000",
      estado: "En construcción",
      entrega: "Diciembre 2025",
      habitaciones: "3-4",
      areas: "120-180 m²",
      imagen: "/api/placeholder/400/300",
      caracteristicas: ["Club House", "Cancha de tenis", "Senderos ecológicos", "Lago artificial"],
      descripcion: "Exclusivo proyecto campestre rodeado de naturaleza con todas las comodidades urbanas."
    },
    {
      id: 4,
      nombre: "Apartamentos El Poblado Premium",
      ubicacion: "El Poblado, Medellín",
      tipo: "residencial",
      precio: "Desde $420,000,000",
      estado: "En preventa",
      entrega: "Marzo 2026",
      habitaciones: "1-2",
      areas: "55-75 m²",
      imagen: "/api/placeholder/400/300",
      caracteristicas: ["Terraza", "Gimnasio", "Co-working", "Pet-friendly"],
      descripcion: "Apartamentos de lujo en la zona más exclusiva de la ciudad con vista panorámica."
    },
    {
      id: 5,
      nombre: "Centro Comercial Plaza Norte",
      ubicacion: "Bello, Antioquia",
      tipo: "comercial",
      precio: "Desde $35,000,000",
      estado: "Disponible",
      entrega: "Inmediata",
      areas: "20-500 m²",
      imagen: "/api/placeholder/400/300",
      caracteristicas: ["Alto flujo peatonal", "Parqueadero amplio", "Food court", "Cine"],
      descripcion: "Locales comerciales en centro comercial estratégicamente ubicado con gran afluencia."
    },
    {
      id: 6,
      nombre: "Hacienda Los Rosales",
      ubicacion: "Rionegro, Antioquia",
      tipo: "campestre",
      precio: "Desde $1,200,000,000",
      estado: "Disponible",
      entrega: "Inmediata",
      habitaciones: "4-5",
      areas: "200-300 m²",
      imagen: "/api/placeholder/400/300",
      caracteristicas: ["Establos", "Piscina olímpica", "Cancha de polo", "Helipuerto"],
      descripcion: "Exclusivas casas campestres con amplios terrenos y instalaciones de primera clase."
    }
  ];

  const filtrarProyectos = (tipo) => {
    setFiltroActivo(tipo);
  };

  const proyectosFiltrados = filtroActivo === 'todos' 
    ? proyectos 
    : proyectos.filter(proyecto => proyecto.tipo === filtroActivo);

  return (
    <div className="proyectos-container">
      <div className="proyectos-header">
        <h1>Nuestros Proyectos</h1>
        <p>Descubre las mejores oportunidades inmobiliarias en Antioquia</p>
      </div>

      <div className="filtros-container">
        <button 
          className={`filtro-btn ${filtroActivo === 'todos' ? 'activo' : ''}`}
          onClick={() => filtrarProyectos('todos')}
        >
          Todos
        </button>
        <button 
          className={`filtro-btn ${filtroActivo === 'residencial' ? 'activo' : ''}`}
          onClick={() => filtrarProyectos('residencial')}
        >
          Residencial
        </button>
        <button 
          className={`filtro-btn ${filtroActivo === 'comercial' ? 'activo' : ''}`}
          onClick={() => filtrarProyectos('comercial')}
        >
          Comercial
        </button>
        <button 
          className={`filtro-btn ${filtroActivo === 'campestre' ? 'activo' : ''}`}
          onClick={() => filtrarProyectos('campestre')}
        >
          Campestre
        </button>
      </div>

      <div className="proyectos-grid">
        {proyectosFiltrados.map(proyecto => (
          <div key={proyecto.id} className="proyecto-card">
            <div className="proyecto-imagen">
              <img src={proyecto.imagen} alt={proyecto.nombre} />
              <div className="proyecto-estado">
                <span className={`estado ${proyecto.estado.toLowerCase().replace(' ', '-')}`}>
                  {proyecto.estado}
                </span>
              </div>
            </div>
            
            <div className="proyecto-content">
              <div className="proyecto-header">
                <h3>{proyecto.nombre}</h3>
                <p className="ubicacion">📍 {proyecto.ubicacion}</p>
              </div>
              
              <p className="descripcion">{proyecto.descripcion}</p>
              
              <div className="proyecto-detalles">
                <div className="detalle">
                  <span className="label">Precio:</span>
                  <span className="valor">{proyecto.precio}</span>
                </div>
                {proyecto.habitaciones && (
                  <div className="detalle">
                    <span className="label">Habitaciones:</span>
                    <span className="valor">{proyecto.habitaciones}</span>
                  </div>
                )}
                <div className="detalle">
                  <span className="label">Área:</span>
                  <span className="valor">{proyecto.areas}</span>
                </div>
                <div className="detalle">
                  <span className="label">Entrega:</span>
                  <span className="valor">{proyecto.entrega}</span>
                </div>
              </div>
              
              <div className="caracteristicas">
                <h4>Características principales:</h4>
                <ul>
                  {proyecto.caracteristicas.map((caracteristica, index) => (
                    <li key={index}>{caracteristica}</li>
                  ))}
                </ul>
              </div>
              
              <div className="proyecto-actions">
                <button className="btn-principal">Ver Detalles</button>
                <button className="btn-secundario">Agendar Visita</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h2>¿Interesado en nuestros proyectos?</h2>
        <p>Contáctanos para recibir más información personalizada</p>
        <div className="cta-buttons">
          <button className="btn-contacto">Contactar Asesor</button>
          <button className="btn-whatsapp">WhatsApp</button>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;