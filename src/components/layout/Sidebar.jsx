//importamos react 
import React from 'react'; 
//importamos los iconos de lucide-react
import { Languages, History, Search, BookOpen, Info, LogOut, Menu } from 'lucide-react';
//importamos useNavigate para navegar entre rutas
import { useNavigate } from 'react-router-dom';
// imprtamos la imagen del logo y del perfil
import logo from '../../assets/logo.png'; 
import perfil from '../../assets/perfil.avif'; 

// Componente Sidebar que recibe varias props para controlar su estado y comportamiento
//Barra lateral 
const Sidebar = ({ isOpen, onToggle, onLogout, vistaActual, onCambioVista, isMobile }) => {
  //hook para navegar entre rutas
  const navigate = useNavigate();

  // Funcion para cerrar sesion 
  const handleLogout = () => {
    localStorage.removeItem('user');// elimina el usuario guardado
    if (onLogout) onLogout(); //ejecutamos funcion externa  si es que existe
    navigate('/'); //redirige al inicio 
  };

  //Lista  de opciones del menu 
  const menuItems = [
    { icon: <Languages size={20} />, text: 'Traductor', vista: 'traductor' },
    { icon: <Search size={20} />, text: 'Frases Comunes', vista: 'frases' },
    { icon: <History size={20} />, text: 'Historial', vista: 'historial' },
    { icon: <BookOpen size={20} />, text: 'Diccionario', vista: 'diccionario' },
    { icon: <Info size={20} />, text: 'Acerca de Runa Shimi', vista: 'acerca' },
  ];

  //Estilos 
  const styles = {
    //Contenedor principal del sidebar 
    sidebar: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: '#EBE0D0', 
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 1100, 
      boxSizing: 'border-box',
      width: isMobile ? '80%' : (isOpen ? '15.625rem' : '3.75rem'),//tamaño dinamico segun el estado y dispositivo 
      maxWidth: '300px',
      transform: isMobile ? (isOpen ? 'translateX(0)' : 'translateX(-100%)') : 'none', 
      //animacion de entrada en moviles 
      transition: 'transform 0.3s ease, width 0.3s ease',
      padding: isOpen || isMobile ? '1.5rem 1rem' : '1rem 0.5rem',
      boxShadow: isOpen ? '4px 0 15px rgba(0,0,0,0.1)' : 'none',
    },
    // logo y boton de menu
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      marginBottom: '2rem',
      //centra cuando cerrado en desktop
      justifyContent: (!isOpen && !isMobile) ? 'center' : 'flex-start'
    },
    //Estilo de cada item del menu
    navItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '0.8rem',
      cursor: 'pointer',
      fontWeight: '600',
      color: '#5d4037',
      borderRadius: '0.5rem',
      marginBottom: '0.2rem',
      whiteSpace: 'nowrap'
    },
    //Estilo del item activo del menu
    navItemActive: {
      backgroundColor: 'rgba(191, 54, 12, 0.1)',
      color: '#bf360c'
    }
  };
// renderizar el componente con estructura y estilo 
  return (
    <div style={styles.sidebar}>
      
      {/* Encabezado  Logo y boton menu */}
      <div style={styles.header}>
        {/* Boton para abrir/cerrar el sidebar */}
        <Menu style={{ cursor: 'pointer', color: '#5d4037', minWidth: '24px' }} onClick={onToggle} />
        {/*Mostrar el logo si esta abierto o en el movil */}
        {(isOpen || isMobile) && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src={logo} alt="Logo Runa Shimi" style={{ width: '40px', height: 'auto' }} />
            <span style={{ fontWeight: '900', color: '#5d4037', letterSpacing: '1px' }}>RUNA SHIMI</span>
          </div>
        )}
      </div>
      {/* Contenido del menu */}
      {(isOpen || isMobile) && (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflowY: 'auto' }}>
          
          {/* Imagen de perfil */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '3px solid #5d4037', overflow: 'hidden' }}>
              <img src={perfil} alt="Perfil" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* Titulo del menu de navegacion */}
          <p style={{ fontSize: '0.75rem', fontWeight: '800', color: '#2e1f1a', marginBottom: '1rem', paddingLeft: '0.5rem' }}>
            MENU DE NAVEGACION
          </p>
          {/* Lista de opciones del menu */}
          <nav>
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                //Aplica estilos dinamicos para resaltar la vista actual
                style={{ ...styles.navItem, ...(vistaActual === item.vista ? styles.navItemActive : {}) }}
                //Evento click para cambiar la vista y cerrar el menu en movil
                onClick={() => {
                  onCambioVista(item.vista);
                  if (isMobile) onToggle(); 
                }}
              >
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </nav>

        </div>
      )}

      {/* Botón Cerrar Sesión */}
      <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(93, 64, 55, 0.2)', paddingTop: '1rem' }}>
        <div style={{ ...styles.navItem, justifyContent: (!isOpen && !isMobile) ? 'center' : 'flex-start' }} onClick={handleLogout}>
          <LogOut size={20} style={{ minWidth: '24px' }} />
         {/* Mostrar texto */}
          {(isOpen || isMobile) && <span>Cerrar Sesión</span>}
        </div>
      </div>

    </div>
  );
};

export default Sidebar; // Exportamos el componente 