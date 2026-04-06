import React, { useState } from 'react';
import logo from '../../assets/logo.png';

const Recuperar = ({ onGoToLogin }) => {
  const [correo, setCorreo] = useState('');

  const handleRecuperar = (e) => {
    e.preventDefault();
    if (correo.trim() === '') {
      alert("Por favor, ingresa tu correo electrónico.");
      return;
    }
    alert(`Enlace de recuperación enviado a: ${correo}`);
  };

  const styles = {
    canvas: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#F4E6D4',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "'Open Sans', sans-serif",
      margin: 0,
      padding: '20px',
      boxSizing: 'border-box',
      overflowX: 'hidden'
    },
    card: {
      width: '100%',
      maxWidth: '600px',
      backgroundColor: '#FFF4DC',
      borderRadius: '27px',
      position: 'relative',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '30px'
    },
    waveHeader: {
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      borderTopLeftRadius: '27px',
      borderTopRightRadius: '27px'
    },
    waveSvg: {
      display: 'block',
      width: '100%',
      height: 'auto'
    },
    waveShape: {
      fill: '#C4451C'
    },
    body: {
      width: '100%',
      padding: '0 20px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    logoWrapper: {
      marginTop: '-30px',
      width: '60%',
      maxWidth: '240px',
      height: '90px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '5px',
      zIndex: 2
    },
    title: {
      fontSize: '26px',
      fontWeight: 'bold',
      color: '#5D4037',
      margin: '20px 0 10px 0',
      textAlign: 'center'
    },
    slogan: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#5D4037',
      margin: '0 0 10px 0',
      textAlign: 'center'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
      width: '100%',
      maxWidth: '400px'
    },
    input: {
      width: '100%',
      height: '50px',
      borderRadius: '100px',
      border: '2px solid #5D4037',
      padding: '0 20px',
      boxSizing: 'border-box',
      outline: 'none',
      fontSize: '16px'
    },
    submitBtn: {
      width: '100%',
      height: '50px',
      backgroundColor: '#C7856A',
      color: 'white',
      border: 'none',
      borderRadius: '100px',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '10px',
      transition: 'background-color 0.3s'
    },
    buttonLink: {
      background: 'none',
      border: 'none',
      color: '#5D4037',
      textDecoration: 'underline',
      cursor: 'pointer',
      marginTop: '20px',
      fontSize: '16px'
    }
  };

  return (
    <div style={styles.canvas}>
      <div style={styles.card}>
        <div style={styles.waveHeader}>
          <svg style={styles.waveSvg} viewBox="0 0 100 30" preserveAspectRatio="none">
            <path style={styles.waveShape} d="M0,10 C15,0 35,20 50,10 C65,0 85,20 100,10 V0 H0 Z" />
            <path style={styles.waveShape} d="M0,15 C10,10 20,20 30,15 C40,10 50,20 60,15 C70,10 80,20 90,15 C100,10 110,20 120,15 V0 H0 Z" opacity="0.6" />
          </svg>
        </div>

        <div style={styles.body}>
          <div style={styles.logoWrapper}>
            <img src={logo} alt="Logo Traductor Runa Shimi" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>

          <h1 style={styles.title}>Traductor Runa Shimi</h1>
          <p style={styles.slogan}>Recupera tu acceso ancestral</p>
          
          <h2 style={styles.title}>¿Olvidaste tu contraseña?</h2>
          <p style={styles.slogan}>
            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
          </p>

          <form onSubmit={handleRecuperar} style={styles.form}>
            <input
              style={styles.input}
              type="email"
              placeholder="Ingresa tu correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />

            <button type="submit" style={styles.submitBtn}>
              Enviar enlace
            </button>
          </form>
        
          <button onClick={onGoToLogin} style={styles.buttonLink}>
            Volver al Inicio de Sesión
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Recuperar;
