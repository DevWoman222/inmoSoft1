import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Home, Key, DollarSign, FileText, Users, Shield } from 'lucide-react';
import './PreguntasFrecuentes.css';

const PreguntasFrecuentes = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const preguntasFrecuentes = [
    {
      categoria: "Compra de Propiedades",
      icono: <Home className="w-6 h-6" />,
      preguntas: [
        {
          pregunta: "¿Cuáles son los requisitos para comprar una propiedad?",
          respuesta: "Para comprar una propiedad necesitas: documento de identidad vigente, comprobantes de ingresos de los últimos 3 meses, certificado laboral, referencias comerciales, y en algunos casos, codeudor. También es importante tener el enganche o cuota inicial que puede variar entre el 20% y 30% del valor de la propiedad."
        },
        {
          pregunta: "¿Qué documentos necesito para el proceso de compra?",
          respuesta: "Los documentos principales son: cédula de ciudadanía, certificado de ingresos, extractos bancarios, paz y salvo de centrales de riesgo, promesa de compraventa, escritura pública, certificado de libertad y tradición, y el paz y salvo de administración y servicios públicos."
        },
        {
          pregunta: "¿Cuánto tiempo toma el proceso de compra?",
          respuesta: "El proceso completo puede tomar entre 30 a 60 días hábiles, dependiendo de la agilidad en la consecución de documentos, aprobación de crédito hipotecario (si aplica), y los trámites notariales. Procesos de contado pueden ser más rápidos, entre 15 a 30 días."
        }
      ]
    },
    {
      categoria: "Crédito Hipotecario",
      icono: <DollarSign className="w-6 h-6" />,
      preguntas: [
        {
          pregunta: "¿Cómo puedo saber si califico para un crédito hipotecario?",
          respuesta: "Debes cumplir con requisitos básicos: tener ingresos demostrables mínimo 3 veces el valor de la cuota mensual, antigüedad laboral mínima de 1 año, buen historial crediticio, y capacidad de pago del 30% máximo de tus ingresos. Te ayudamos con la pre-aprobación gratuita."
        },
        {
          pregunta: "¿Qué porcentaje puedo financiar de una propiedad?",
          respuesta: "Los bancos en Colombia financian hasta el 80% del valor de la propiedad para vivienda nueva y hasta el 70% para vivienda usada. Esto significa que necesitas un enganche del 20% al 30% del valor total, más gastos de escrituración y registro."
        },
        {
          pregunta: "¿Cuáles son las tasas de interés actuales?",
          respuesta: "Las tasas de interés hipotecario varían según el banco y el perfil del cliente, generalmente están entre 11% y 16% EA. Ofrecemos asesoría para encontrar la mejor opción según tu perfil crediticio y te acompañamos en el proceso de aprobación."
        }
      ]
    },
    {
      categoria: "Venta de Propiedades",
      icono: <Key className="w-6 h-6" />,
      preguntas: [
        {
          pregunta: "¿Cómo determino el precio de venta de mi propiedad?",
          respuesta: "Realizamos un avalúo gratuito considerando factores como: ubicación, estado de la propiedad, metraje, acabados, servicios cercanos, y precios del mercado en la zona. También analizamos propiedades similares vendidas recientemente para establecer un precio competitivo."
        },
        {
          pregunta: "¿Qué comisión cobra la inmobiliaria?",
          respuesta: "Nuestra comisión es del 3% del valor de venta, que se paga únicamente cuando se concrete la venta. Incluye: promoción en portales inmobiliarios, fotografía profesional, visitas acompañadas, asesoría legal, y acompañamiento durante todo el proceso hasta la escrituración."
        },
        {
          pregunta: "¿En cuánto tiempo se vende una propiedad?",
          respuesta: "El tiempo promedio de venta varía entre 3 a 6 meses, dependiendo del precio, ubicación, estado de la propiedad y condiciones del mercado. Propiedades bien ubicadas y con precios competitivos pueden venderse en menos tiempo."
        }
      ]
    },
    {
      categoria: "Arriendos",
      icono: <FileText className="w-6 h-6" />,
      preguntas: [
        {
          pregunta: "¿Qué requisitos solicitan para arrendar?",
          respuesta: "Para arrendar necesitas: documento de identidad, comprobantes de ingresos mínimo 3 veces el valor del arriendo, referencias comerciales y personales, codeudor con finca raíz o ingresos demostrables, y póliza de arrendamiento. También realizamos estudio de referencias."
        },
        {
          pregunta: "¿Cuánto es el depósito de garantía?",
          respuesta: "El depósito de garantía generalmente equivale a 1 mes de arriendo y se consigna en una cuenta de ahorros a nombre conjunto del arrendador y arrendatario. Este dinero se devuelve al finalizar el contrato, descontando cualquier daño o deuda pendiente."
        },
        {
          pregunta: "¿Cada cuánto se puede aumentar el arriendo?",
          respuesta: "Según la ley colombiana, el arriendo puede aumentarse anualmente en un porcentaje que no supere el 100% del IPC (Índice de Precios al Consumidor) del año anterior. El aumento se aplica cumplido el primer año de contrato."
        }
      ]
    },
    {
      categoria: "Servicios Legales",
      icono: <Shield className="w-6 h-6" />,
      preguntas: [
        {
          pregunta: "¿Qué incluye el acompañamiento legal?",
          respuesta: "Nuestro acompañamiento legal incluye: revisión de documentos, elaboración de contratos, verificación de títulos de propiedad, gestión de paz y salvos, trámites notariales y de registro, y asesoría durante todo el proceso para garantizar transacciones seguras."
        },
        {
          pregunta: "¿Cuáles son los gastos de escrituración?",
          respuesta: "Los gastos incluyen: derechos notariales (0.27% del valor), registro (0.5% del valor), certificados y documentos (aproximadamente $200.000), y beneficencia (1% del valor). En total, aproximadamente 1.77% del valor de la propiedad más gastos menores."
        },
        {
          pregunta: "¿Verifican la documentación de las propiedades?",
          respuesta: "Sí, realizamos verificación completa de todos los documentos: certificado de libertad y tradición actualizado, paz y salvo de impuestos, servicios públicos y administración, permisos de construcción, y verificamos que no existan embargos, hipotecas o demandas sobre la propiedad."
        }
      ]
    },
    {
      categoria: "Servicios Adicionales",
      icono: <Users className="w-6 h-6" />,
      preguntas: [
        {
          pregunta: "¿Ofrecen administración de propiedades?",
          respuesta: "Sí, ofrecemos servicios completos de administración que incluyen: recaudo de arriendos, mantenimiento preventivo y correctivo, manejo de inquilinos, renovación de contratos, gestión de pólizas, y informes mensuales detallados del estado de tu propiedad."
        },
        {
          pregunta: "¿Realizan avalúos comerciales?",
          respuesta: "Contamos con avaluadores certificados que realizan avalúos comerciales para diferentes propósitos: compraventa, créditos hipotecarios, seguros, sucesiones, y procesos judiciales. Los avalúos cumplen con normas técnicas y tienen validez oficial."
        },
        {
          pregunta: "¿Qué garantías ofrecen en sus servicios?",
          respuesta: "Garantizamos transparencia total en todos los procesos, acompañamiento profesional personalizado, cumplimiento de tiempos acordados, y respaldo legal en todas las transacciones. Contamos con pólizas de responsabilidad civil y profesional para mayor tranquilidad de nuestros clientes."
        }
      ]
    }
  ];

  return (
    <div className="preguntas-frecuentes-container">
      <div className="header-section">
        <h1 className="main-title">Preguntas Frecuentes</h1>
        <p className="main-subtitle">
          Resolvemos todas tus dudas sobre nuestros servicios inmobiliarios
        </p>
      </div>

      <div className="categorias-grid">
        {preguntasFrecuentes.map((categoria, categoriaIndex) => (
          <div key={categoriaIndex} className="categoria-card">
            <div className="categoria-header">
              <div className="categoria-icon">
                {categoria.icono}
              </div>
              <h2 className="categoria-title">{categoria.categoria}</h2>
            </div>

            <div className="preguntas-lista">
              {categoria.preguntas.map((item, preguntaIndex) => {
                const globalIndex = `${categoriaIndex}-${preguntaIndex}`;
                const isExpanded = expandedIndex === globalIndex;

                return (
                  <div key={preguntaIndex} className="pregunta-item">
                    <button
                      className={`pregunta-button ${isExpanded ? 'expanded' : ''}`}
                      onClick={() => toggleExpanded(globalIndex)}
                    >
                      <span className="pregunta-text">{item.pregunta}</span>
                      <div className="chevron-icon">
                        {isExpanded ? <ChevronUp /> : <ChevronDown />}
                      </div>
                    </button>
                    
                    <div className={`respuesta-container ${isExpanded ? 'show' : ''}`}>
                      <div className="respuesta-content">
                        <p>{item.respuesta}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="contact-section">
        <div className="contact-card">
          <h3>¿No encontraste la respuesta que buscabas?</h3>
          <p>Nuestro equipo de expertos está listo para atenderte y resolver todas tus dudas personalizadamente.</p>
          <div className="contact-buttons">
            <button className="btn-primary">Contactar Asesor</button>
            <button className="btn-secondary">Agendar Cita</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;