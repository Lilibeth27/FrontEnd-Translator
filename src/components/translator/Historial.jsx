import React, { useState } from "react";
import { Copy, Check } from 'lucide-react'; // Importamos los iconos

const Historial = () => {
  const [historial] = useState([
    { id: 1, esp: "Gracias", runa: "Yupaychani", fecha: "19 Mar, 10:30 AM" },
    { id: 2, esp: "Hola", runa: "Imanalla", fecha: "19 Mar, 11:00 AM" },
    { id: 3, esp: "tierra", runa: "allpa", fecha: "20 Mar, 10:00 AM" },
    { id: 4, esp: "Agua", runa: "Yaku", fecha: "21 Mar, 09:00 AM" },
    { id: 5, esp: "Sol", runa: "Inti", fecha: "21 Mar, 10:00 AM" },
    { id: 6, esp: "Luna", runa: "Killa", fecha: "22 Mar, 08:30 AM" },
  ]);

  // --- ESTADO PARA FEEDBACK DE COPIADO ---
  const [copiedId, setCopiedId] = useState(null);

  // --- LÓGICA DE PAGINACIÓN ---
  const [paginaActual, setPaginaActual] = useState(1);
  const itemsPorPagina = 3;

  const ultimoIndice = paginaActual * itemsPorPagina;
  const primerIndice = ultimoIndice - itemsPorPagina;
  const itemsActuales = historial.slice(primerIndice, ultimoIndice);
  const totalPaginas = Math.ceil(historial.length / itemsPorPagina);

  const irSiguiente = () => { if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1); };
  const irAnterior = () => { if (paginaActual > 1) setPaginaActual(paginaActual - 1); };

  // --- FUNCIÓN PARA COPIAR ---
  const handleCopy = async (id, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Error al copiar", err);
    }
  };

  const styles = {
    historialContainer: {
      width: '100%',
      maxWidth: '50rem',
      marginTop: '1.875rem',
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    header: {
      fontSize: '2rem',
      color: '#5b4d49',
      marginBottom: '1.25rem',
      textAlign: 'center',
    },
    cardHistorial: {
      backgroundColor: 'white',
      borderRadius: '0.9375rem',
      marginBottom: '1.25rem',
      overflow: 'hidden',
      boxShadow: '0 0.25rem 0.625rem rgba(0,0,0,0.1)',
    },
    waveTop: {
      width: '100%',
      height: '1.25rem',
    },
    waveSvg: {
      width: '100%',
      height: '100%',
    },
    cardContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.625rem 0.9375rem',
    },
    leftSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      minWidth: '8.125rem'
    },
    fecha: {
      fontSize: '0.75rem',
      color: '#444'
    },
    textSection: {
      flex: 1,
      fontSize: '0.8125rem',
      color: '#333'
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: '#8e8e8e', 
      transition: '0.2s',
      padding: '5px',
    },
    paginationContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.9375rem',
      marginTop: '1.25rem',
      paddingBottom: '1.875rem'
    },
    pageButton: {
      width: '2.1875rem',
      height: '2.1875rem',
      borderRadius: '50%',
      border: 'none',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: '0 0.125rem 0.3125rem rgba(0,0,0,0.1)',
      color: '#5b4d49',
      fontWeight: 'bold',
      transition: '0.3s'
    },
    pageInfo: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      color: '#5b4d49',
      letterSpacing: '0.125rem'
    }
  };

  return (
    <div style={styles.historialContainer}>
      <h1 style={styles.header}>
        Tu Historial de Traducciones <span>📚</span>
      </h1>

      {itemsActuales.map((item, index) => (
        <div key={item.id || index} style={styles.cardHistorial}>
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
              <p style={{ margin: '2px 0' }}><strong>Español:</strong> {item.esp}</p>
              <p style={{ margin: '2px 0' }}><strong>Runa Shimi:</strong> {item.runa}</p>
            </div>
            
            {/* BOTÓN DE COPIAR REEMPLAZANDO EL EMOJI */}
            <div 
              style={styles.actions} 
              onClick={() => handleCopy(item.id || index, item.runa)}
              title="Copiar traducción"
            >
              {copiedId === (item.id || index) ? (
                <Check size={18} color="#4A7C59" />
              ) : (
                <Copy size={18} />
              )}
            </div>
          </div>
        </div>
      ))}

      <div style={styles.paginationContainer}>
        <button 
          onClick={irAnterior} 
          style={{...styles.pageButton, opacity: paginaActual === 1 ? 0.5 : 1}}
          disabled={paginaActual === 1}
        >
          ‹
        </button>

        <span style={styles.pageInfo}>
          {paginaActual} {paginaActual + 1 <= totalPaginas ? paginaActual + 1 : ''} ...
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