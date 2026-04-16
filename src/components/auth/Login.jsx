import React, { useState, useEffect } from 'react';// Importamos React y los hooks necesarios
import logo from '../../assets/logo.png'; //importamos el logo 

// Componente Login
const Login = ({ onGoToRegister, onGoToRecuperar, onLoginSuccess }) => {
 
  // Estados para controlar o guardar datos en el formulario
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  // Estado para mostrar u ocultar la contraseña 
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  // Detectar tamaño de pantalla para responsive para móviles
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Actualiza el tamaño de la pantalla 
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    // Limpiar el event listener al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

// Función para  el envío del formulario de login
  const handleLogin = (e) => {
    e.preventDefault();// evita que la pagina se recargue al enviar el formulario
    
    //validacion del  usuario y contraseña 
    if (usuario === "admin" && contrasena === "1234") {
      alert("Inicio de sesión correcto");
      onLoginSuccess(); //llama la funcion cuando el login es exitoso
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  // Estilo 
  const styles = {
    //Fondo del login
    canvas: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#F4E6D4',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "'Open Sans', sans-serif",
      margin: 0,
      padding: '1.25rem',
      boxSizing: 'border-box',
      overflowX: 'hidden'
    },
    //tarjeta del login
    card: {
      width: '100%',
      maxWidth: '37.5rem',
      backgroundColor: '#FFF4DC',
      borderRadius: '1.6875rem',
      position: 'relative',
      boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '1.875rem'
    },
    // Encabezado con el logo y el título con las ondas
    waveHeader: {
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      borderTopLeftRadius: '1.6875rem',
      borderTopRightRadius: '1.6875rem'
    },
    // SVG de la onda
    waveSvg: {
      display: 'block',
      width: '100%',
      height: 'auto'
    },
    //Color de la onda
    waveShape: {
      fill: '#C4451C'
    },
    // Contenido de la tarjeta (logo, título, formulario)
    cardBody: {
      width: '100%',
      padding: '0 1.25rem',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    // Contenedor del logo 
    logoWrapper: {
      marginTop: '-1.875rem',
      width: '60%',
      maxWidth: '15rem',
      height: '5.625rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '0.3125rem',
      zIndex: 2
    },
    //Titulo del login
    title: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      color: '#5D4037',
      margin: '0 0 0.625rem 0',
      textAlign: 'center'
    },
    // Slogan o subtítulo del login
    slogan: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#5D4037',
      margin: '0 0 0.9375rem 0',
      textAlign: 'center'
    },
    // Estilo del formulario de login
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.75rem',
      width: '100%',
      boxSizing: 'border-box'
    },
    // Contenedor de cada grupo de input (icono + campo)
    inputGroup: {
      width: '100%',
      maxWidth: '35.4375rem',
      height: '3.75rem',
      backgroundColor: '#F9FAFB',
      borderRadius: '6.25rem',
      border: '0.125rem solid #5D4037',
      display: 'flex',
      alignItems: 'center',
      padding: '0 1.25rem',
      boxSizing: 'border-box'
    },
    // Icono del input (Usuario y candado)
    iconWrapper: {
      width: isMobile ? '1.75rem' : '1.5rem',
      height: isMobile ? '1.75rem' : '1.5rem',
      marginRight: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    // Icono para mostrar u ocultar la contraseña (ojito)
    eyeIconWrapper: {
      width: isMobile ? '1.75rem' : '1.5rem',
      height: isMobile ? '1.75rem' : '1.5rem',
      marginLeft: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    },
    // Input de usuario y contraseña
    input: {
      flex: 1,
      border: 'none',
      backgroundColor: 'transparent',
      outline: 'none',
      fontSize: '1.125rem',
      color: '#5D4037'
    },
    // Fila de los controles debajo del formulario (checkbox y link de recuperar contraseña)
    controlsRow: {
      width: '100%',
      maxWidth: '35.4375rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '0.3125rem',
      marginBottom: '1.25rem'
    },
    // Estilo del checkbox "Recordarme" 
    checkboxWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.625rem',
      fontSize: '1rem',
      color: '#735240',
      cursor: 'pointer'
    },
    //Texto del link "¿Olvidaste tu contraseña?"
    forgotPassword: {
      fontSize: '1rem',
      color: '#735240',
      textDecoration: 'none',
      cursor: 'pointer'
    },
    // Botón de iniciar sesión
    submitBtn: {
      width: '100%',
      maxWidth: '35.4375rem',
      height: '3.75rem',
      backgroundColor: '#C7856A',
      borderRadius: '1.6875rem',
      border: 'none',
      fontSize: '1.375rem',
      fontWeight: 'bold',
      color: '#FFFFFF',
      cursor: 'pointer',
      marginBottom: '1.5625rem'
    },
    // Texto para registrarse
    registerText: {
      fontSize: '1rem',
      color: '#000000',
      margin: 0,
      textAlign: 'center'
    },
    //link de registrarse
    registerLink: {
      fontWeight: 'bold',
      cursor: 'pointer'
    },
    // Estilo del checkbox personalizado
    checkbox:{
      width: '1rem',
      height: '1rem',
      border: '0.125rem solid #5D4037',
      borderRadius: '0.25rem',
      backgroundColor: '#F9FAFB',
      cursor: 'pointer'
    },
   
  };
// Renderizamos el componente
  return (
    //contenedor principal del login con fondo y centrado
    <div style={styles.canvas}>
      <div style={styles.card}>
           {/* Encabezado con ondas SVG */}
        <div style={styles.waveHeader}>
          <svg style={styles.waveSvg} viewBox="0 0 100 30" preserveAspectRatio="none">
             {/* Primera onda */}
            <path style={styles.waveShape} d="M0,10 C15,0 35,20 50,10 C65,0 85,20 100,10 V0 H0 Z" />
            {/* Segunda onda */}
            <path style={styles.waveShape} d="M0,15 C10,10 20,20 30,15 C40,10 50,20 60,15 C70,10 80,20 90,15 C100,10 110,20 120,15 V0 H0 Z" opacity="0.6" />
          </svg>
        </div>

            {/* Contenido de la tarjeta */}
        <div style={styles.cardBody}>
          {/* Logo */}
          <div style={styles.logoWrapper}>
            <img src={logo} alt="Logo Traductor Runa Shimi" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          {/* Título y slogan */}
          <h1 style={styles.title}>Traductor Runa Shimi</h1>
          <p style={styles.slogan}>Conecta con tus raíces ancestrales</p>

          {/* Formulario de login */}
          <form style={styles.form} onSubmit={handleLogin}>
            
              {/* Input de usuario */}
            <div style={styles.inputGroup}>
              {/*Icono de usuario (persona) */}
              <div style={styles.iconWrapper}>
                <svg viewBox="0 0 448 512" fill="#5D4037" width="100%" height="100%">
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
                </svg>
              </div>
                
               {/* Input donde el usuario escribe su nombre */}
              <input 
                type="text" 
                placeholder="Usuario" 
                style={styles.input}
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)} // Actualiza el estado del usuario al escribir
              />
            </div>
              {/* Input de contraseña */}
            <div style={styles.inputGroup}>
              {/*Icono de contraseña (candado) */}
              <div style={styles.iconWrapper}>
                <svg viewBox="0 0 448 512" fill="#5D4037" width="100%" height="100%">
                  <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"/>
                </svg>
              </div>
              <input 
                type={mostrarContrasena ? "text" : "password"} // Cambia tipo dinámicamente
                placeholder="Contraseña" 
                style={styles.input}
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)} // Guarda contraseña
              />
                {/* Icono para mostrar u ocultar la contraseña (ojito) */}
              <div style={styles.eyeIconWrapper} onClick={() => setMostrarContrasena(!mostrarContrasena)}>
                {mostrarContrasena ? (
                  <svg viewBox="0 0 640 512" fill="#5D4037" width="100%" height="100%">
                    <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346.39 397.39a144.13 144.13 0 0 1 -26.39 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0 -147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0 -2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0 -121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1 -1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"/>
                  </svg>
                ) : (
                  // Icono cuando la contraseña está oculta (ojito cerrado)
                  <svg viewBox="0 0 576 512" fill="#5D4037" width="100%" height="100%">
                    <path d="M288 144a110.94 110.94 0 0 0 -31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1 -56 56 55.4 55.4 0 0 1 -27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"/>
                  </svg>
                )}
              </div>
            </div>
            {/* Botones de accion de recordar y recordar contraseña */}
            <div style={styles.controlsRow}>
               {/* Checkbox para recordar usuario */}
              <label style={styles.checkboxWrapper}>
                <input type="checkbox" style={styles.checkbox} />
                Recordarme
              </label>
              {/* Link de recuperar contraseña */}
              <span style={styles.forgotPassword} onClick={onGoToRecuperar}>
                ¿Olvidaste tu contraseña?
              </span>
            </div>
              {/* Botón de iniciar sesión */}
            <button type="submit" style={styles.submitBtn}>
              Iniciar Sesión
            </button>
          </form>
          {/* Texto para registrarse con link */}
          <p style={styles.registerText}>
            ¿No tienes una cuenta? <span style={styles.registerLink} onClick={onGoToRegister}>Regístrate gratis Aquí</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login; // Exportamos el componente para usarlo en otras partes de la aplicación  
