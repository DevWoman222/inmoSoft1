// Footer.jsx
import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Aquí iría la lógica para suscribirse
      console.log('Email suscrito:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section'>
          <div className='footer-brand'>
            <h3 className='brand-name'>Inmosoft</h3>
            <p className='brand-tagline'>Tu hogar ideal te espera</p>
            <div className='brand-description'>
              Conectamos propietarios y compradores con las mejores propiedades del mercado.
            </div>
          </div>
        </div>
        
        <div className='footer-section'>
          <h4>Servicios</h4>
          <ul className='footer-links'>
            <li><a href="#compra"><span className='link-icon'>🏠</span>Compra de Inmuebles</a></li>
            <li><a href="#venta"><span className='link-icon'>💰</span>Venta de Propiedades</a></li>
            <li><a href="#alquiler"><span className='link-icon'>🔑</span>Alquiler Residencial</a></li>
            <li><a href="#tasaciones"><span className='link-icon'>📊</span>Tasaciones</a></li>
            <li><a href="#consultoria"><span className='link-icon'>👔</span>Consultoría Inmobiliaria</a></li>
          </ul>
        </div>
        
        <div className='footer-section'>
          <h4>Contacto</h4>
          <div className='contact-info'>
            <div className='contact-item'>
              <span className='contact-icon'>📧</span>
              <a href="mailto:info@inmosoft.com">info@inmosoft.com</a>
            </div>
            <div className='contact-item'>
              <span className='contact-icon'>📞</span>
              <a href="tel:+5460444443444">+54 604 444 43 44</a>
            </div>
            <div className='contact-item'>
              <span className='contact-icon'>📍</span>
              <span>Antioquia, Colombia</span>
            </div>
            <div className='contact-item'>
              <span className='contact-icon'>🕒</span>
              <span>Lun-Vie: 9:00 - 18:00</span>
            </div>
          </div>
        </div>
        
        <div className='footer-section'>
          <h4>Conecta con Nosotros</h4>
          <div className='social-links'>
            <a href="#facebook" className='social-link'>
              <span className='social-icon'>📘</span> Facebook
            </a>
            <a href="#instagram" className='social-link'>
              <span className='social-icon'>📷</span> Instagram
            </a>
            <a href="#whatsapp" className='social-link'>
              <span className='social-icon'>💬</span> WhatsApp
            </a>
            <a href="#linkedin" className='social-link'>
              <span className='social-icon'>👔</span> LinkedIn
            </a>
          </div>
          
          <div className='newsletter'>
            <p>Recibe ofertas exclusivas en tu email</p>
            {subscribed ? (
              <div className="subscription-success">
                ✅ ¡Gracias por suscribirte!
              </div>
            ) : (
              <form className='newsletter-form' onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  placeholder="Ingresa tu email" 
                  className='email-input' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className='subscribe-btn'>Suscribirse</button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      <div className='footer-bottom'>
        <div className='footer-bottom-content'>
          <p>&copy; 2025 Inmosoft. Todos los derechos reservados.</p>
          <div className='footer-legal'>
            <a href="#privacidad">Política de Privacidad</a>
            <span className='separator'>|</span>
            <a href="#terminos">Términos de Uso</a>
            <span className='separator'>|</span>
            <a href="#cookies">Cookies</a>
            <span className='separator'>|</span>
            <a href="#sitemap">Mapa del Sitio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;