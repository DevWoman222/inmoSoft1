import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Filtros from './pages/Filtros';
import Notificaciones from './pages/Notificaciones';
import Flotantes from './componentes/Flotantes.jsx';
import Login from './pages/Login.jsx';
import Register from './componentes/register.jsx';
import Recover from './componentes/Recover';
import VerifyCode from './componentes/VerifyCode';
import ResetPassword from './componentes/ResetPassword';
import DetalleApartamento from './pages/DetalleApartamento';
import QuienesSomos from "./pages/QuienesSomos";
import PreguntasFrecuentes from './pages/PreguntasFrecuentes.jsx';
import Proyectos from './pages/Proyectos.jsx';
import Ajustes from './pages/Ajustes.jsx';

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

function AppLayout() {
  const location = useLocation();
  // Páginas donde no se debe mostrar navbar y footer
  const authPages = ['/login', '/register', '/recover', '/verify-code', '/reset-password'];
  const isAuthPage = authPages.includes(location.pathname);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="app-container">
      {!isAuthPage && <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/filtros" element={<Filtros />} />
          <Route path="/notificaciones" element={<Notificaciones />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recover" element={<Recover />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/detalle" element={<DetalleApartamento />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/preguntas" element={<PreguntasFrecuentes />} />
          <Route path="/proyectos" element={<Proyectos/>} />
          <Route path="/ajustes" element={<Ajustes/>} />
        </Routes>
      </main>

      {!isAuthPage && <Footer />}
      {!isAuthPage && <Flotantes />}
 
      {showTopButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          🔺
        </button>
      )}
    </div>
  );
}

export default App;