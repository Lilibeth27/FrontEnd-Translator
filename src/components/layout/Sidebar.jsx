import React from 'react';
import { Languages, History, Search, BookOpen, Info, LogOut, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import perfil from '../../assets/perfil.avif';

const Sidebar = ({ isOpen, onToggle, onLogout }) => {
  const navigate = useNavigate();

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
      height: '100vh',
      backgroundColor: '#F4E6D4',
      position: 'fixed',
      left: 0,
      top: 0,
      boxSizing: 'border-box',
      overflow: 'hidden',
      transition: 'width 0.3s ease'
    },
    sidebarOpen: {
      width: '250px',
      padding: '20px'
    },
    sidebarClosed: {
      width: '60px',
      padding: '15px 10px',
      alignItems: 'center'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '20px'
    },
    hamburger: {
      cursor: 'pointer',
      color: '#5d4037',
      minWidth: '24px'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    mainLogo: {
      width: '50px',
      height: 'auto'
    },
    brandName: {
      fontWeight: 'bold',
      color: '#5d4037',
      marginLeft: '8px'
    },
    profileSection: {
      display: 'flex',
      justifyContent: 'center',
      margin: '20px 0'
    },
    avatarRing: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      border: '3px solid #4a3728',
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
      gap: '5px'
    },
    menuTitle: {
      fontSize: '12px',
      fontWeight: '800',
      marginBottom: '15px',
      color: '#2e1f1a'
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      padding: '10px',
      cursor: 'pointer',
      fontWeight: '600',
      color: '#5d4037',
      textDecoration: 'none'
    },
    navItemHover: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: '8px'
    },
    navItemIcon: {
      color: '#bf360c'
    },
    logoutSection: {
      marginTop: 'auto'
    },
    mobileHeader: {
      display: 'none',
      padding: '10px',
      backgroundColor: '#C4451C',
      color: 'white'
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
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                style={{
                  ...styles.navItem,
                  ...(item.active ? { backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '8px' } : {})
                }}
              >
                <span style={styles.navItemIcon}>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </nav>

          <div style={styles.logoutSection}>
            <div style={styles.navItem} onClick={handleLogout}>
              <LogOut size={20} style={styles.navItemIcon} />
              <span>Cerrar Sesión</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
