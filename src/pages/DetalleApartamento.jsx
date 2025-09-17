import React, { useState } from "react";
import Slider from "react-slick";
import './DetalleApartamento.css';

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

            {/*  Información del Apartamento  */}

            <div className="info-apartamento">
                <h2>Información del Apartamento</h2>
                <br>
                </br>
                <p><strong> #️⃣ Código:</strong> 14523</p>
                <p><strong> 📍 Ubicación:</strong> San Diego, Medellín</p>
                <p><strong>  ⇄ Área: </strong> 72 m²</p>
                <p><strong> 🛁 Baños:</strong> 2</p>
                <p><strong> 🛏️ Alcobas:</strong> 3</p>
                <p><strong> 🚗 Parqueadero:</strong> 1</p>


                <h3>Descripción Apartamento</h3>
                 <br>
                </br>

                <p>
                    Magnífico apartamento para vivir con total tranquilidad y confort.
                    Está ubicado en San Diego, ideal para el descanso y con vista a la reserva.
                </p>

            </div>

        </div> 

    );


}

export default DetalleApartamento;