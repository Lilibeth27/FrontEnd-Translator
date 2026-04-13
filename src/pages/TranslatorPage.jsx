import React, { useState, useEffect } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Traductor from '../components/translator/Traductor';

const TranslatorPage = ({ isSidebarOpen, onToggleSidebar, onLogout }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh', 
      width: '100vw', 
      backgroundColor: '#f4ece1',
      overflow: isMobile && isSidebarOpen ? 'hidden' : 'auto'
    }}>
      <Sidebar isOpen={isSidebarOpen} onToggle={onToggleSidebar} onLogout={onLogout} />
      <div style={{
        flex: 1,
        marginLeft: isMobile ? 0 : isSidebarOpen ? '15.625rem' : '3.75rem',
        transition: 'margin-left 0.3s ease',
        width: '100%',
        overflow: 'auto'
      }}>
        <Traductor />
      </div>
    </div>
  );
};

export default TranslatorPage;
