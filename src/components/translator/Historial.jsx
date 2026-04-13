import React, { useState } from "react";


const Historial = () => {
  const [historial, setHistorial] = useState([
    { esp: "Gracias", runa: "Yupaychani", fecha: "19 Mar, 10:30 AM" },
    { esp: "Hola", runa: "Imanalla", fecha: "19 Mar, 11:00 AM" },
    { esp: "tierra", runa: "allpa", fecha: "20 Mar, 10:00 AM" },
    { esp: "Agua", runa: "Yaku", fecha: "21 Mar, 09:00 AM" },
    { esp: "Sol", runa: "Inti", fecha: "21 Mar, 10:00 AM" },
    { esp: "Luna", runa: "Killa", fecha: "22 Mar, 08:30 AM" },
    { esp: "Gacias", runa: "Yupaychani", fecha: "19 Mar, 10:30 AM" },
    { esp: "Hoa", runa: "Imanalla", fecha: "19 Mar, 11:00 AM" },
    { esp: "tirra", runa: "allpa", fecha: "20 Mar, 10:00 AM" },
  ]);

  // --- LÓGICA DE PAGINACIÓN ---
  const [paginaActual, setPaginaActual] = useState(1);
  const itemsPorPagina = 3;

  // Calculamos los índices
  const ultimoIndice = paginaActual * itemsPorPagina;
  const primerIndice = ultimoIndice - itemsPorPagina;
  const itemsActuales = historial.slice(primerIndice, ultimoIndice);
  const totalPaginas = Math.ceil(historial.length / itemsPorPagina);

  const irSiguiente = () => {
    if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1);
  };

  const irAnterior = () => {
    if (paginaActual > 1) setPaginaActual(paginaActual - 1);
  };

  const styles = {
    historialContainer: {
      width: '100%',
      maxWidth: '800px',
      marginTop: '30px',
    },
    header: {
      fontSize: '1.5rem',
      color: '#5b4d49',
      marginBottom: '20px'
    },
    cardHistorial: {
      backgroundColor: 'white',
      borderRadius: '15px',
      marginBottom: '20px',
      overflow: 'hidden',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    },
    waveTop: {
      width: '100%',
      height: '20px',
    },
    waveSvg: {
      width: '100%',
      height: '100%',
    },
    cardContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 15px',
    },
    leftSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      minWidth: '130px'
    },
    fecha: {
      fontSize: '12px',
      color: '#444'
    },
    textSection: {
      flex: 1,
      fontSize: '13px',
      color: '#333'
    },
    actions: {
      display: 'flex',
      gap: '10px',
      fontSize: '18px',
    },
    // --- ESTILOS DE LA PAGINACIÓN ---
    paginationContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '15px',
      marginTop: '20px',
      paddingBottom: '30px'
    },
    pageButton: {
      width: '35px',
      height: '35px',
      borderRadius: '50%',
      border: 'none',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      color: '#5b4d49',
      fontWeight: 'bold',
      transition: '0.3s'
    },
    pageInfo: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#5b4d49',
      letterSpacing: '2px'
    }
  };

  return (
    <div style={styles.historialContainer}>
      <h1 style={styles.header}>
        Tu Historial de Traducciones <span>📚</span>
      </h1>

      {itemsActuales.map((item, index) => (
        <div key={index} style={styles.cardHistorial}>
          <div style={{
            ...styles.waveTop,
            backgroundColor: index % 3 === 0 ? '#C4451C' : index % 3 === 1 ? '#4A7C59' : '#5b4d49'
          }}>
            <svg viewBox="0 0 100 20" preserveAspectRatio="none" style={styles.waveSvg}>
              <path d="M0,10 C15,0 35,20 50,10 C65,0 85,20 100,10 V0 H0 Z" fill="white" />
            </svg>
          </div>

          <div style={styles.cardContent}>
            <div style={styles.leftSection}>
              <div>📅</div>
              <span style={styles.fecha}>{item.fecha}</span>
            </div>
            <div style={styles.textSection}>
              <p><strong>Español:</strong> {item.esp}</p>
              <p><strong>Runa Shimi:</strong> {item.runa}</p>
            </div>
            <div style={styles.actions}>
              <span>❤️</span>
              <span>📋</span>
            </div>
          </div>
        </div>
      ))}

      {/* CONTROLES DE PAGINACIÓN */}
      <div style={styles.paginationContainer}>
        <button 
          onClick={irAnterior} 
          style={{...styles.pageButton, opacity: paginaActual === 1 ? 0.5 : 1}}
          disabled={paginaActual === 1}
        >
          ‹
        </button>

        <span style={styles.pageInfo}>
          {paginaActual} {paginaActual + 1} ...
        </span>

        <button 
          onClick={irSiguiente} 
          style={{...styles.pageButton, opacity: paginaActual === totalPaginas ? 0.5 : 1}}
          disabled={paginaActual === totalPaginas}
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default Historial;