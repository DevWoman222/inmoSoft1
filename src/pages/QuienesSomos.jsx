import React from "react";
import "./QuienesSomos.css";
import fondo from '../assets/quiénsomos.jpg';
import logo from "../assets/logo.png";

export default function QuienesSomos() {
  return (
    <div className="quienes-container">
      <div className="quienes-imagen">
        <img src={fondo} alt="Quiénes Somos" />
        <h1 className="quienes-titulo">¿Quiénes Somos?</h1>
      </div>

      <div className="quienes-info">
        <div className="quienes-texto-container">
        <div className="quienes-texto">
          <p>
            En InmoSoft nos apasiona conectar personas con el lugar perfecto para vivir, trabajar o disfrutar.
            Somos una plataforma inmobiliaria innovadora que ofrece soluciones flexibles de alojamiento, desde alquileres por días y
            semanas hasta estadías más largas, adaptándonos a las necesidades de cada usuario.
            <br /><br />
            Creemos en una experiencia transparente y personalizada: por eso, integramos mapas interactivos, favoritos, reseñas reales
            y comunicación directa con agentes, para que tomar decisiones sea rápido y seguro.
            <br /><br />
            Nuestro compromiso es simplificar la búsqueda, mejorar la confianza y acercarte a tu próximo hogar, sin importar dónde estés.
          </p>
           <br /><br />
            <br /><br />
          </div>
        </div>
        <div className="quienes-logo">
          <img src={logo} alt="Logo InmoSoft" />
        </div>
      </div>
      
    </div>
  );
}

