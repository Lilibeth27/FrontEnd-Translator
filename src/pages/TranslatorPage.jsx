import React, { useState, useEffect } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Traductor from '../components/translator/Traductor';
import Historial from '../components/translator/Historial';
import Diccionario from '../components/translator/Diccionario';
import FrasesComunes from '../components/translator/FrasesComunes';
import Acerca from '../components/translator/Acerca';

const TranslatorPage = ({ isSidebarOpen, onToggleSidebar, onLogout }) => {
  const [vistaActual, setVistaActual] = useState('traductor');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const renderVista = () => {
    switch (vistaActual) {
      case 'traductor':
        return <Traductor />;
      case 'frases':
        return <FrasesComunes />;
      case 'historial':
        return <Historial />;
      case 'diccionario':
        return <Diccionario />;
      case 'acerca':
        return <Acerca />;
      default:
        return <Traductor />;
    }
  };

  return (
    <div style={{ position: 'relative', display: 'flex', height: '100vh', width: '100vw', backgroundColor: '#F4E6D4', overflow: 'hidden' }}>
      
      {isMobile && isSidebarOpen && (
        <div 
          onClick={onToggleSidebar}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1000 
          }}
        />
      )}

      {/* Barra Lateral */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={onToggleSidebar} 
        onLogout={onLogout}
        vistaActual={vistaActual}
        onCambioVista={setVistaActual}
        isMobile={isMobile} 
      />

      {/* Contenedor Principal */}
      <div style={{
        flex: 1,
       
        marginLeft: isMobile ? '0' : (isSidebarOpen ? '15.625rem' : '3.75rem'),
        transition: 'margin-left 0.3s ease',
        height: '100%',
        overflowY: 'auto',
        width: '100%'
      }}>
        
        
        {isMobile && !isSidebarOpen && (
          <button 
            onClick={onToggleSidebar} 
            style={{ position: 'absolute', top: '15px', left: '15px', zIndex: 900, background: 'none', border: 'none', cursor: 'pointer', color: '#5d4037' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        )}

        {/* Espacio donde se renderizan las vistas */}
        <div style={{ padding: isMobile ? '4rem 1rem 1rem 1rem' : '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          {renderVista()}
        </div>

      </div>
    </div>
  );
};

export default TranslatorPage;