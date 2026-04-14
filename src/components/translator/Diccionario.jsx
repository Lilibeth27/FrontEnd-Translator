import React, { useState, useEffect } from "react";
import { Search, Copy } from 'lucide-react';

const Diccionario = () => {
  // --- ESTADOS ---
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [searchTerm, setSearchTerm] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);

  // Datos de ejemplo
  const [palabras] = useState([
    { id: 1, esp: "Gracias", runa: "Yupaychani", tipo: "(Sustantivo)", color: "#C74C22" },
    { id: 2, esp: "Hola", runa: "Imanalla", tipo: "(Saludo)", color: "#4F7E53" },
    { id: 3, esp: "Tierra", runa: "Allpa", tipo: "(Sustantivo)", color: "#5F477E" },
    { id: 4, esp: "Agua", runa: "Yaku", tipo: "(Sustantivo)", color: "#C6903D" },
    { id: 5, esp: "Sol", runa: "Inti", tipo: "(Sustantivo)", color: "#4F6561" },
    { id: 6, esp: "Luna", runa: "Killa", tipo: "(Sustantivo)", color: "#8E6953" },
    { id: 7, esp: "Cielo", runa: "Q'illqa", tipo: "(Sustantivo)", color: "#C74C22" },
    { id: 8, esp: "Estrella", runa: "Chaska", tipo: "(Sustantivo)", color: "#4F7E53" },
  ]);

  const alfabet = ["A", "ch", "h", "k", "l", "ll", "m", "n", "ñ", "p", "r", "s", "sh", "t", "ts", "w", "y"];

  // --- RESPONSIVE ---
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- LÓGICA DE PAGINACIÓN ---
  const itemsPorPagina = 6; 
  const palabrasFiltradas = palabras.filter(p => 
    p.esp.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.runa.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const totalPaginas = Math.ceil(palabrasFiltradas.length / itemsPorPagina);
  const ultimoIndice = paginaActual * itemsPorPagina;
  const primerIndice = ultimoIndice - itemsPorPagina;
  const itemsActuales = palabrasFiltradas.slice(primerIndice, ultimoIndice);

  const irSiguiente = () => { if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1); };
  const irAnterior = () => { if (paginaActual > 1) setPaginaActual(paginaActual - 1); };

  const styles = {
    container: {
      width: '100%',
      maxWidth: '65rem',
      margin: '0 auto',
      padding: isMobile ? '1rem' : '2rem',
      backgroundColor: '#F4E6D4',
      minHeight: '100vh',
      boxSizing: 'border-box'
    },
    headerTitle: {
      fontSize: isMobile ? '1.8rem' : '2.5rem',
      fontWeight: '900',
      color: '#5D4037',
      textAlign: 'center',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    },
    searchBox: {
      position: 'relative',
      width: '100%',
      maxWidth: '50rem',
      margin: '0 auto 1.5rem auto'
    },
    input: {
      width: '100%',
      padding: isMobile ? '0.8rem 1rem 0.8rem 3rem' : '1rem 7rem 1rem 3.5rem',
      borderRadius: '50px',
      border: '2px solid #5D4037',
      fontSize: '1rem',
      outline: 'none',
      boxSizing: 'border-box'
    },
    btnBuscar: {
      position: 'absolute',
      right: '5px',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: '#F4E6D4',
      border: '1.5px solid #5D4037',
      borderRadius: '25px',
      padding: '0.5rem 1.5rem',
      fontWeight: 'bold',
      display: isMobile ? 'none' : 'block',
      cursor: 'pointer'
    },
    alphabet: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: isMobile ? '8px' : '12px',
      marginBottom: '2rem'
    },
    letter: {
      fontSize: isMobile ? '1.1rem' : '1.4rem',
      fontWeight: '900',
      color: '#5D4037',
      cursor: 'pointer'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1.2rem',
      marginBottom: '2rem'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '20px',
      border: '1.5px solid #5D4037',
      padding: '1.2rem',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    },
    cardDecoration: (color) => ({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '15px',
      backgroundColor: color,
    }),
    waveSvg: { width: '100%', height: '100%', display: 'block' },
    contentRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '10px'
    },
    runa: { fontSize: '1.6rem', fontWeight: '900', color: '#333', margin: 0 },
    esp: { fontSize: '1rem', color: '#555', marginLeft: '8px' },
    tipo: { fontSize: '0.85rem', color: '#777', fontWeight: 'bold', margin: '5px 0 0 0' },
    
    // --- ESTILOS DE PAGINACIÓN IGUALES AL HISTORIAL ---
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
      fontSize: '1.2rem',
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
    <div style={styles.container}>
      <h1 style={styles.headerTitle}>Diccionario Runa Shimi 📖</h1>

      <div style={styles.searchBox}>
        <Search size={20} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }} />
        <input 
          style={styles.input} 
          placeholder="Buscar palabra..." 
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value); setPaginaActual(1);}}
        />
        <button style={styles.btnBuscar}>Buscar</button>
      </div>

      <div style={styles.alphabet}>
        {alfabet.map(l => (
          <span key={l} style={styles.letter}>{l}</span>
        ))}
      </div>

      <div style={styles.grid}>
        {itemsActuales.map((p) => (
          <div key={p.id} style={styles.card}>
            <div style={styles.cardDecoration(p.color)}>
              <svg viewBox="0 0 100 20" preserveAspectRatio="none" style={styles.waveSvg}>
                <path d="M0,10 C15,0 35,20 50,10 C65,0 85,20 100,10 V0 H0 Z" fill="white" />
              </svg>
            </div>
            <div style={styles.contentRow}>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                  <h2 style={styles.runa}>{p.runa}</h2>
                  <span style={styles.esp}>{p.esp}</span>
                </div>
                <p style={styles.tipo}>{p.tipo}</p>
              </div>
              <Copy size={18} style={{ color: '#5D4037', cursor: 'pointer', opacity: 0.6 }} />
            </div>
          </div>
        ))}
      </div>

      {/* CONTROLES DE PAGINACIÓN ACTUALIZADOS */}
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
};

export default Diccionario;