// Importamos React y los hooks necesarios
import React, { useState, useEffect } from 'react';
// Importamos iconos desde la librería lucide-react
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react'; 
// Importamos el logo
import logo from '../../assets/logo.png';

// Componente de registro de usuario
const Registrar = ({ onGoToLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
   // Estado para mostrar u ocultar la contraseña
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
    // Estado para detectar si es dispositivo móvil
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

   // useEffect para detectar cambios en el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    //escuchamos el evento de cambio de tamaño de ventana
    window.addEventListener('resize', handleResize);
    // Limpiamos el evento al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //funcion que se ejecuta al enviar el formulario de registro
  const handleRegister = (e) => {
    e.preventDefault();// Evitar recargar la pagina al enviar el formulario
    //validacion que las contraseñas coincidan
    if (contrasena !== confirmarContrasena) {
      alert("Las contraseñas no coinciden");
      return;
    }
    alert("Registro exitoso simulado");//simulación de registro exitoso
  };

  // Estilos
  const styles = {
    //Contenedor principal
    canvas: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#F4E6D4',
      display: 'flex',
      fontFamily: "'Open Sans', sans-serif",
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1.25rem',
      boxSizing: 'border-box',
    },
    // Tarjeta de registro
    card: {
      width: '100%',
      maxWidth: '450px',
      backgroundColor: '#FFF4DC',
      borderRadius: '1.6875rem',
      boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '1.875rem',
      overflow: 'hidden'
    },
    //Ondas
    waveHeader: {
      width: '100%',
      backgroundColor: '#C4451C',
      lineHeight: 0
    },
    // Cuerpo de la tarjeta
    cardBody: {
      width: '100%',
      padding: '0 1.5rem',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    //logo
    logoWrapper: {
      marginTop: '-2.5rem',
      width: '100px',
      height: '100px',
      zIndex: 2,
      backgroundColor: '#FFF4DC',
      borderRadius: '50%',
      padding: '5px'
    },
    // Título principal
    title: {
      fontSize: '1.6rem',
      fontWeight: 'bold',
      color: '#5D4037',
      margin: '0.5rem 0',
      textAlign: 'center'
    },
    // Slogan o descripción
    slogan: {
      fontSize: '1rem',
      color: '#5D4037',
      margin: '0 0 1.5rem 0',
      textAlign: 'center',
      lineHeight: '1.3'
    },
    // Contenedor de cada input con su icono
    inputGroup: {
      width: '100%',
      height: '3rem',
      backgroundColor: '#F9FAFB',
      borderRadius: '6.25rem',
      border: '2px solid #5D4037',
      display: 'flex',
      alignItems: 'center',
      padding: '0 1.25rem',
      boxSizing: 'border-box',
      marginBottom: '0.75rem'
    },
    //input de texto
    input: {
      flex: 1,
      border: 'none',
      backgroundColor: 'transparent',
      outline: 'none',
      fontSize: '1rem',
      color: '#5D4037',
      marginLeft: '0.75rem'
    },
    //Boton de registro 
    submitBtn: {
      width: '100%',
      height: '3.5rem',
      backgroundColor: '#C7856A',
      borderRadius: '1.6875rem',
      border: 'none',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#FFFFFF',
      cursor: 'pointer',
      marginTop: '0.5rem'
    },
    //texto informativo para ir a login
    loginText: {
      fontSize: '0.9rem',
      color: '#5D4037',
      marginTop: '1.5rem'
    }
  };

  // Renderizamos el componente
  return (
    <div style={styles.canvas}>
      <div style={styles.card}>
          {/* Encabezado onda decorativa SVG */}
        <div style={styles.waveHeader}>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{width: '100%', height: '70px'}}>
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#C4451C'}}></path>
          </svg>
        </div>

        <div style={styles.cardBody}>
          {/* Logo */}
          <div style={styles.logoWrapper}>
            <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
 
           {/* Título y descripción */}
          <h1 style={styles.title}>Traductor Runa Shimi</h1>
          <p style={styles.slogan}>Crea una cuenta para conectarte<br/>con tus raíces ancestrales</p>


          {/* Formulario */}
          <form style={{ width: '100%' }} onSubmit={handleRegister}>
            {/* Usuario */}
            <div style={styles.inputGroup}>
              <User size={20} color="#5D4037" />
              <input 
                type="text" 
                placeholder="Nombre de usuario" 
                style={styles.input} 
                value={usuario} 
                onChange={(e) => setUsuario(e.target.value)} 
              />
            </div>

            {/* Correo */}
            <div style={styles.inputGroup}>
              <Mail size={20} color="#5D4037" />
              <input 
                type="email" 
                placeholder="Correo electrónico" 
                style={styles.input} 
                value={correo} 
                onChange={(e) => setCorreo(e.target.value)} 
              />
            </div>

            {/* Contraseña */}
            <div style={styles.inputGroup}>
              <Lock size={20} color="#5D4037" />
              <input 
                type={mostrarContrasena ? "text" : "password"} 
                placeholder="Contraseña" 
                style={styles.input} 
                value={contrasena} 
                onChange={(e) => setContrasena(e.target.value)} 
              />
              {/* Icono para mostrar/ocultar contraseña */}
              <div onClick={() => setMostrarContrasena(!mostrarContrasena)} style={{ cursor: 'pointer', display: 'flex' }}>
                {mostrarContrasena ? <EyeOff size={20} color="#5D4037" /> : <Eye size={20} color="#5D4037" />}
              </div>
            </div>

            {/* Confirmar Contraseña */}
            <div style={styles.inputGroup}>
              <Lock size={20} color="#5D4037" />
              <input 
                type="password" 
                placeholder="Confirmar contraseña" 
                style={styles.input} 
                value={confirmarContrasena} 
                onChange={(e) => setConfirmarContrasena(e.target.value)} 
              />
            
            </div>
            {/* Texto de términos de condiciones */}
            <p style={{ fontSize: '0.75rem', color: '#5D4037', margin: '10px 0' }}>
              Al registrarte, aceptas nuestros <b>Términos y Condiciones</b> y <b>Políticas de Privacidad.</b>
            </p>

            {/* Botón */}
            <button type="submit" style={styles.submitBtn}>Crear Cuenta</button>
          </form>

            {/* Enlace a login */}
          <p style={styles.loginText}>
            ¿Ya tienes una cuenta? <span style={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={onGoToLogin}>Inicia sesión</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registrar;//exportamos el componente 
