import React, { useState, useEffect } from 'react';

const FrasesComunes = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const frases = [
    { esp: "Buenos Días", runa: "Alli puncha", icon: "🌞" },
    { esp: "Gracias", runa: "Yupaychani", icon: "🙏" },
    { esp: "Hola", runa: "Imanalla", icon: "👋" },
    { esp: "Te quiero", runa: "Kanta kuyani", icon: "❤️" },
    { esp: "Bienvenido", runa: "Alli shamushka", icon: "🏠" },
    { esp: "Adiós", runa: "Kaykama", icon: "👋" },
  ];

  const styles = {
    header: {
      fontSize: "2rem",
      fontWeight: "900",
      color: "#5a3d2b",
      marginBottom: "1.875rem",
      display: "flex",
      alignItems: "center",
      gap: "0.625rem",
      justifyContent: "center",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 320px)", // 🔥 ajuste
      gap: "1.25rem",
      width: "100%",
      maxWidth: "50rem",
      margin: "0 auto",
      padding: isMobile ? '0 0.5rem' : '0',
      boxSizing: 'border-box',
      justifyContent: "center",
    },

    frasescard: {
      backgroundColor: "white",
      borderRadius: "1.875rem",
      padding: "0.9375rem 1.5625rem",
      display: "flex",
      alignItems: "center",
      gap: "0.9375rem",
      boxShadow: "0 0.125rem 0.375rem rgba(0,0,0,0.05)",
    },

    icon: {
      fontSize: "1.875rem",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
    },

    espText: {
      fontSize: "0.8125rem",
      color: "#7a7a7a",
    },

    runaText: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      color: "#2d5a42",
      margin: 0,
    }
  };

  return (
    <div>
      <h1 style={styles.header}>
        Frases Comunes <span>⛰️</span>
      </h1>

      <div style={styles.grid}>
        {frases.map((item, index) => (
          <div key={index} style={styles.frasescard}>
            <div style={styles.icon}>{item.icon}</div>

            <div style={styles.textContainer}>
              <span style={styles.espText}>{item.esp}</span>
              <h2 style={styles.runaText}>{item.runa}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrasesComunes;