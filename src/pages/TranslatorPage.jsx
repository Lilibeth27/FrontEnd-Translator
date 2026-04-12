import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Traductor from '../components/translator/Traductor';

const TranslatorPage = ({ isSidebarOpen, onToggleSidebar, onLogout }) => {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', backgroundColor: '#f4ece1' }}>
      <Sidebar isOpen={isSidebarOpen} onToggle={onToggleSidebar} onLogout={onLogout} />
      <Traductor />
    </div>
  );
};

export default TranslatorPage;
