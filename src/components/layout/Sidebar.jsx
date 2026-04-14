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
    wrapper: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1000,
      pointerEvents: isOpen ? 'auto' : 'none',
      overflow: 'hidden',
    },
    sidebar: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: '#F4E6D4',
      position: 'absolute',
      left: 0,
      top: 0,
      boxSizing: 'border-box',
      zIndex: 1001,
      transition: 'transform 0.3s ease',
      overflowY: 'auto',
      boxShadow: isOpen ? '4px 0 10px rgba(0,0,0,0.1)' : 'none',
    },
    sidebarOpen: {
      width: isMobile ? '85vw' : '15.625rem',
      maxWidth: isMobile ? '20rem' : '15.625rem',
      padding: isMobile ? '1.25rem' : '1.25rem',
      transform: 'translateX(0)'
    },
    sidebarClosed: {
      width: isMobile ? '85vw' : '3.75rem',
      maxWidth: isMobile ? '20rem' : '3.75rem',
      padding: isMobile ? '0.5rem' : '1rem 0.625rem',
      transform: isMobile ? 'translateX(-100%)' : 'translateX(0)'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '0.625rem',
      marginBottom: '1rem',
      flexShrink: 0
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
      width: isMobile ? '4rem' : '6.25rem',
      height: isMobile ? '4rem' : '6.25rem',
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
      flex: 1, 
      minHeight: 0,
      overflowY: 'auto'
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
      fontSize: isMobile ? '1rem' : '0.875rem'
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
      marginTop: 'auto',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      borderTop: '0.0625rem solid rgba(0,0,0,0.1)',
      flexShrink: 0
    },
    menuButton: {
      position: 'fixed',
      top: '1rem',
      left: '1rem',
      zIndex: 900,
      backgroundColor: '#C4451C',
      borderRadius: '50%',
      padding: '0.75rem',
      cursor: 'pointer',
      boxShadow: '0 0.25rem 0.5rem rgba(0,0,0,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 1000
    }
  };

  const sidebarStyle = {
    ...styles.sidebar,
    ...(isOpen ? styles.sidebarOpen : styles.sidebarClosed)
  };

  return (
    <>
      {!isOpen && isMobile && (
        <div style={styles.menuButton} onClick={onToggle}>
          <Menu size={28} color="white" />
        </div>
      )}
      
      <div style={styles.wrapper}>
        <div style={sidebarStyle}>
          <div style={styles.header}>
            {isMobile && isOpen ? (
              <X style={styles.closeButton} size={28} onClick={onToggle} />
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
            <div 
              style={{
                ...styles.navItem,
                justifyContent: isOpen ? 'flex-start' : 'center',
                padding: isOpen ? '0.75rem' : '0.75rem 0'
              }} 
              onClick={handleLogout}
            >
              <LogOut size={20} style={styles.navItemIcon} />
              {isOpen && <span>Cerrar Sesión</span>}
            </div>
          </div>
        </div>
        
        {isMobile && isOpen && (
          <div style={styles.overlay} onClick={onToggle} />
        )}
      </div>
    </>
  );
};

export default Sidebar;