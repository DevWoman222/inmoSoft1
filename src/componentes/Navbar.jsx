import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Logo_filtros.png';
import tiktok from '../assets/tiktok.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import userIcon from '../assets/user.png';
import settingsIcon from '../assets/settings.png';
import telefono from '../assets/telefono.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={logo} alt="Logo Inmosoft" />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
          aria-controls="navbar-content"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Content */}
        <div 
          id="navbar-content"
          className={`navbar-content ${isMenuOpen ? 'active' : ''}`}
        >
          {/* Navigation Links */}
          <ul className="nav-links">
            <li>
              <Link 
                to="/inicio" 
                onClick={closeMenu}
                className={isActive('/inicio') ? 'active-link' : ''}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                to="/preguntas" 
                onClick={closeMenu}
                className={isActive('/preguntas') ? 'active-link' : ''}
              >
                Preguntas Frecuentes
              </Link>
            </li>
            <li>
              <Link 
                to="/proyectos" 
                onClick={closeMenu}
                className={isActive('/proyectos') ? 'active-link' : ''}
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link 
                to="/quienes-somos" 
                onClick={closeMenu}
                className={isActive('/quienes-somos') ? 'active-link' : ''}
              >
                ¿Quiénes Somos?
              </Link>
            </li>
          </ul>

          {/* Contact and Social Info */}
          <div className="navbar-info">
            <div className="contact-info">
              <img src={telefono} alt="Teléfono" />
              <div className="contact-text">
                <p>Línea Única</p>
                <strong>604 444 43 44</strong>
              </div>
            </div>
            
            <div className="social-icons">
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <img src={tiktok} alt="TikTok" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
            
            <div className="icons-right">
              <Link to="/perfil" onClick={closeMenu}>
                <img src={userIcon} alt="Usuario" />
              </Link>
              <Link to="/configuracion" onClick={closeMenu}>
                <img src={settingsIcon} alt="Configuración" />
              </Link>
              <Link to="/login" className="login-button" onClick={closeMenu}>
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        <div 
          className={`navbar-overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      </div>
    </nav>
  );
}

export default Navbar;