import React, { useState } from "react";
import Slider from "react-slick";
import './DetalleApartamento.css';

// Leaflet (mapa)
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // TileLayer:(imágenes del mapa) Marker: (Icono con un pin) 
import "leaflet/dist/leaflet.css";
import L from "leaflet";    // configuraciones avanzadas, como íconos personalizados.

// importar los estilos de slick 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// lista imagenes 
import apto1 from '../assets/apto1.jpg';
import apto2 from '../assets/apto2.jpg';
import apto3 from '../assets/apto3.jpg';
import apto4 from '../assets/apto4.jpg';
import apto5 from '../assets/apto5.jpg';

const imagenes = [apto1, apto2, apto3, apto4, apto5];

// Icono personalizado del marcador
const icon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [35, 35],
});


function DetalleApartamento() {


    // estado imagen seleccionada al dar clic 
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

    // Liberia carrusel 

    const settings = {

        pauseOnHover: true, // detener cuando el usuario pone el cursor
        dots: true,   // puntos navegación 
        Infinity: true,  // infinito 
        speed: 600,  // tiempo 500 milisegundos 6 seg
        autoplay: true,  // cambio automatico
        autoplaySeed: 6000, // define el tiempo 
        slidesToShow: 1,  // cuantas img 
        slidesToScroll: 1,  // avanza 1 a 1 
        arrows: true  // flechas

    };

    // Coordenadas de San Diego, Medellín
    const ubicacion = [6.2359, -75.5751];


    return (
        <div className="detalle-apartamento-container">
            <div className="galeria-fotos">
                <Slider {...settings}>
                    {imagenes.map((src, index) => (
                        <div key={index}>
                            <img
                                src={src}
                                alt={`Foto ${index + 1}`}
                                onClick={() => setImagenSeleccionada(src)} // al dar clic, se abre la imagen
                                className="imagen-carrusel"
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Modal para mostrar imagen en grande */}
            {imagenSeleccionada && (
                <div className="modal" onClick={() => setImagenSeleccionada(null)}>
                    <img src={imagenSeleccionada} alt="Ampliada" className="imagen-grande" />
                </div>
            )}

            {/* Contenedor Info + Mapa */}

            <div className="detalle-content">
                {/* Info apartamento */}
                <div className="info-apartamento">
                    <h2>Información del Apartamento</h2>
                    <p><strong>#️⃣ Código:</strong> 14523</p>
                    <p><strong>📍 Ubicación:</strong> San Diego, Medellín</p>
                    <p><strong>⇄ Área:</strong> 72 m²</p>
                    <p><strong>🛁 Baños:</strong> 2</p>
                    <p><strong>🛏️ Alcobas:</strong> 3</p>
                    <p><strong>🚗 Parqueadero:</strong> 1</p>

                    <h3>Descripción Apartamento</h3>
                    <p>
                        Magnífico apartamento para vivir con total tranquilidad y confort.
                        Está ubicado en San Diego, ideal para el descanso y con vista a la reserva.
                    </p>
                </div>

                {/* Mapa */}
                <div className="mapa-apartamento">
                    <h3>Mapa de Ubicación</h3>
                    <MapContainer center={ubicacion} zoom={15} scrollWheelZoom={false}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; OpenStreetMap contributors"
                        />
                        <Marker position={ubicacion} icon={icon}>
                            <Popup>Apartamento en San Diego, Medellín</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}

export default DetalleApartamento;