import React from 'react';
import { Languages, History, Search, BookOpen, Info, LogOut, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import perfil from '../../assets/perfil.avif';

const Sidebar = ({ isOpen, onToggle, onLogout, vistaActual, onCambioVista }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    if (onLogout) onLogout();
    navigate('/');
  };

  const handleMenuClick = (vista) => {
    if (onCambioVista) onCambioVista(vista);
  };
  
  const menuItems = [
    { icon: <Languages size={20} />, text: 'Traductor', vista: 'traductor' },
    { icon: <Search size={20} />, text: 'Frases Comunes', vista: 'frases' },
    { icon: <History size={20} />, text: 'Historial', vista: 'historial' },
    { icon: <BookOpen size={20} />, text: 'Diccionario', vista: 'diccionario' },
    { icon: <Info size={20} />, text: 'Acerca de Runa Shimi', vista: 'acerca' },
  ];
  
  const styles = {
    sidebar: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: '#F4E6D4',
      position: 'fixed',
      left: 0,
      top: 0,
      boxSizing: 'border-box',
      overflow: 'hidden',
      transition: 'width 0.3s ease',
      zIndex: 1000
    },
    sidebarOpen: {
      width: '15.625rem',
      padding: '1.25rem'
    },
    sidebarClosed: {
      width: '3.75rem',
      padding: '1rem 0.625rem',
      alignItems: 'center'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.625rem',
      marginBottom: '1.25rem'
    },
    hamburger: {
      cursor: 'pointer',
      color: '#5d4037',
      minWidth: '1.5rem'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    mainLogo: {
      width: '3rem',
      height: 'auto'
    },
    brandName: {
      fontWeight: 'bold',
      color: '#5d4037',
      marginLeft: '0.5rem'
    },
    profileSection: {
      display: 'flex',
      justifyContent: 'center',
      margin: '1.25rem 0'
    },
    avatarRing: {
      width: '6.25rem',
      height: '6.25rem',
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
      overflowY: 'auto'
    },
    menuTitle: {
      fontSize: '0.75rem',
      fontWeight: '800',
      marginBottom: '1rem',
      color: '#2e1f1a'
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '0.625rem',
      cursor: 'pointer',
      fontWeight: '600',
      color: '#5d4037',
      textDecoration: 'none',
      borderRadius: '0.5rem'
    },
    navItemActive: {
      backgroundColor: 'rgba(191, 54, 12, 0.15)',
      borderRadius: '0.5rem',
      color: '#bf360c'
    },
    navItemIcon: {
      color: '#bf360c',
      flexShrink: 0
    },
    logoutSection: {
      marginTop: 'auto',
      paddingTop: '1rem',
      borderTop: '0.0625rem solid rgba(0,0,0,0.1)'
    }
  };

  const sidebarStyle = {
    ...styles.sidebar,
    ...(isOpen ? styles.sidebarOpen : styles.sidebarClosed)
  };

  return (
    <div style={sidebarStyle}>
      <div style={styles.header}>
        <Menu style={styles.hamburger} onClick={onToggle} />
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
            <p style={styles.menuTitle}>MENU DE NAVEGACION</p>
            {menuItems.map((item, index) => {
              const isActive = vistaActual === item.vista;
              return (
                <div 
                  key={index} 
                  style={{
                    ...styles.navItem,
                    ...(isActive ? styles.navItemActive : {})
                  }}
                  onClick={() => handleMenuClick(item.vista)}
                >
                  <span style={styles.navItemIcon}>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              );
            })}
          </nav>
        </>
      )}
      
      <div style={styles.logoutSection}>
        <div 
          style={{
            ...styles.navItem,
            justifyContent: isOpen ? 'flex-start' : 'center'
          }} 
          onClick={handleLogout}
        >
          <LogOut size={20} style={styles.navItemIcon} />
          {isOpen && <span>Cerrar Sesión</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;