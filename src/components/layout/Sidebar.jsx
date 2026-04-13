import React, { useState, useEffect } from 'react';
import { Languages, History, Search, BookOpen, Info, LogOut, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import perfil from '../../assets/perfil.avif';

const Sidebar = ({ isOpen, onToggle, onLogout }) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    if (onLogout) onLogout();
    navigate('/');
  };
  
  const menuItems = [
    { icon: <Languages size={20} />, text: 'Traductor', active: true },
    { icon: <Search size={20} />, text: 'Frases Comunes' },
    { icon: <History size={20} />, text: 'Historial' },
    { icon: <BookOpen size={20} />, text: 'Diccionario' },
    { icon: <Info size={20} />, text: 'Acerca de Runa Shimi' },
  ];
  
  const styles = {
    sidebar: {
      display: 'flex',
      flexDirection: 'column',
      height: '100dvh', // Usamos dvh para mejor soporte en navegadores móviles
      backgroundColor: '#F4E6D4',
      position: 'fixed',
      left: 0,
      top: 0,
      boxSizing: 'border-box',
      zIndex: 1000,
      transition: 'transform 0.3s ease',
      overflowY: 'auto', // Permite scroll si el contenido es muy alto
      overflowX: 'hidden'
    },
    sidebarOpen: {
      width: isMobile ? '85vw' : '15.625rem',
      maxWidth: isMobile ? '20rem' : '15.625rem',
      padding: isMobile ? '1rem' : '1.25rem',
      transform: 'translateX(0)'
    },
    sidebarClosed: {
      width: isMobile ? '85vw' : '3.75rem',
      maxWidth: isMobile ? '20rem' : '3.75rem',
      padding: isMobile ? '1rem' : '1rem 0.625rem',
      transform: isMobile ? 'translateX(-100%)' : 'translateX(0)'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '0.625rem',
      marginBottom: '1rem',
      flexShrink: 0 // Evita que el header se aplaste
    },
    hamburger: {
      cursor: 'pointer',
      color: '#5d4037',
      minWidth: '1.5rem'
    },
    closeButton: {
      cursor: 'pointer',
      color: '#5d4037',
      minWidth: '1.5rem'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    mainLogo: {
      width: '2.5rem',
      height: 'auto'
    },
    brandName: {
      fontWeight: 'bold',
      color: '#5d4037',
      marginLeft: '0.5rem',
      fontSize: isMobile ? '0.875rem' : '1rem'
    },
    profileSection: {
      display: 'flex',
      justifyContent: 'center',
      margin: isMobile ? '0.5rem 0' : '1rem 0',
      flexShrink: 0
    },
    avatarRing: {
      width: isMobile ? '3.5rem' : '6.25rem', // Un poco más pequeño en móvil
      height: isMobile ? '3.5rem' : '6.25rem',
      borderRadius: '50%',
      border: '0.1875rem solid #4a3728',
      overflow: 'hidden'
    },
    avatar: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    navMenu: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.3125rem',
      flex: 1, // Esto empuja el logout hacia abajo
      minHeight: 'min-content' 
    },
    menuTitle: {
      fontSize: '0.75rem',
      fontWeight: '800',
      marginBottom: '0.5rem',
      color: '#2e1f1a'
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '0.75rem',
      cursor: 'pointer',
      fontWeight: '600',
      color: '#5d4037',
      textDecoration: 'none',
      borderRadius: '0.5rem',
      fontSize: isMobile ? '0.9rem' : '0.875rem'
    },
    navItemActive: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: '0.5rem'
    },
    navItemIcon: {
      color: '#bf360c',
      flexShrink: 0
    },
    logoutSection: {
      marginTop: 'auto', // Empuja al final del flex
      paddingTop: '1rem',
      paddingBottom: isMobile ? '1rem' : '0', // Espacio extra abajo en móviles
      borderTop: '0.0625rem solid rgba(0,0,0,0.1)',
      flexShrink: 0
    },
    menuButton: {
      position: 'fixed',
      top: '1rem',
      left: '1rem',
      zIndex: 999,
      backgroundColor: '#C4451C',
      borderRadius: '50%',
      padding: '0.75rem',
      cursor: 'pointer',
      boxShadow: '0 0.25rem 0.5rem rgba(0,0,0,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };

  const sidebarStyle = {
    ...styles.sidebar,
    ...(isOpen ? styles.sidebarOpen : styles.sidebarClosed)
  };

  return (
    <>
      {!isOpen && (
        <div style={styles.menuButton} onClick={onToggle}>
          <Menu size={isMobile ? 28 : 24} color="white" />
        </div>
      )}
      
      <div style={sidebarStyle}>
        <div style={styles.header}>
          {isMobile && isOpen ? (
            <X style={styles.closeButton} size={isMobile ? 28 : 24} onClick={onToggle} />
          ) : (
            <Menu style={styles.hamburger} size={isMobile ? 28 : 24} onClick={onToggle} />
          )}
          {isOpen && (
            <div style={styles.logoContainer}>
              <img src={logo} alt="Runa Logo" style={styles.mainLogo} />
              <span style={styles.brandName}>RUNA SHIMI</span>
            </div>
          )}
        </div>

        {isOpen && (
          <>
            <div style={styles.profileSection}>
              <div style={styles.avatarRing}>
                <img src={perfil} alt="Avatar" style={styles.avatar} />
              </div>
            </div>

            <nav style={styles.navMenu}>
              <p style={styles.menuTitle}>MENU</p>
              {menuItems.map((item, index) => (
                <div 
                  key={index} 
                  style={{
                    ...styles.navItem,
                    ...(item.active ? styles.navItemActive : {})
                  }}
                >
                  <span style={styles.navItemIcon}>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </nav>
          </>
        )}
        
        <div style={styles.logoutSection}>
          <div style={styles.navItem} onClick={handleLogout}>
            <LogOut size={20} style={styles.navItemIcon} />
            <span>Cerrar Sesión</span>
          </div>
        </div>
      </div>
      
      {isMobile && isOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 999
          }} 
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default Sidebar;