import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Traductor from '../components/translator/Traductor';
import Historial from '../components/translator/Historial';
import Diccionario from '../components/translator/Diccionario';
import FrasesComunes from '../components/translator/FrasesComunes';
import Acerca from '../components/translator/Acerca';

const TranslatorPage = ({ isSidebarOpen, onToggleSidebar, onLogout }) => {
  const [vistaActual, setVistaActual] = useState('traductor');

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

  const handleCambioVista = (vista) => {
    setVistaActual(vista);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', backgroundColor: '#f4ece1' }}>
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={onToggleSidebar} 
        onLogout={onLogout}
        vistaActual={vistaActual}
        onCambioVista={handleCambioVista}
      />
      <div style={{
        flex: 1,
        marginLeft: isSidebarOpen ? '15.625rem' : '3.75rem',
        transition: 'margin-left 0.3s ease',
        width: '100%',
        height: '100%',
        overflow: 'auto'
      }}>
        <div style={{
          maxWidth: '75rem',
          margin: '0 auto',
          padding: '2rem'
        }}>
          {renderVista()}
        </div>
      </div>
    </div>
  );
};

export default TranslatorPage;