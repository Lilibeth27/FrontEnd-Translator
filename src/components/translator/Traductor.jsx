import React, { useState, useEffect } from 'react';
import { ArrowLeftRight, RefreshCw, Copy } from 'lucide-react';
import Historial from './Historial';
import Diccionario from './Diccionario';
import Acerca from './Acerca'

const Traductor = ({ onGoToLogin}) => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState(''); // Guarda la traducción
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isEspanolToRuna, setIsEspanolToRuna] = useState(true); // Controla el idioma
  const [historial, setHistorial] = useState([]);
  const [diccionario, setDiccionario] = useState([]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handleSwapLanguages = () => {
    setIsEspanolToRuna(!isEspanolToRuna); // Invierte el valor
    
    // Intercambiamos el texto de origen con la traducción
    const tempText = text;
    setText(translatedText);
    setTranslatedText(tempText);
  };

  const frases = [
    { esp: "Buenos Días", runa: "Alli puncha", icon: "🌞" },
    { esp: "Gracias", runa: "Yupaychani", icon: "🙏" },
    { esp: "Hola", runa: "Imanalla", icon: "👋" },
    { esp: "Te quiero", runa: "Kanta kuyani", icon: "❤️" },
    { esp: "Bienvenido", runa: "Alli shamushka", icon: "🏠" },
    { esp: "Adiós", runa: "Kaykama", icon: "👋" },
  ];

  const styles = {
    // --- CONTENEDOR PRINCIPAL BLINDADO ---
    container: {
      flex: 1,
      width: '100%',
      minHeight: '100vh',
      overflowY: 'auto',
      paddingTop: isMobile ? '2.5rem' : '2.5rem',
      paddingRight: isMobile ? '0.9375rem' : '1.25rem',
      paddingBottom: '1.25rem',
      paddingLeft: isMobile ? '1rem' : '1.25rem', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
    },
    headerText: {
      textAlign: 'center',
      color: '#5d4037',
      width: '100%',
      maxWidth: '37.5rem',
      marginBottom: '1.5625rem',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      overflowWrap: 'break-word', 
    },
    
    // --- ESTILOS DE LA TARJETA ---
    card: {
      backgroundColor: 'white', 
      width: '100%',
      maxWidth: '53.125rem', 
      borderRadius: '1.875rem',
      padding: isMobile ? '1.25rem' : '2.1875rem',
      boxShadow: '0 0.25rem 0.9375rem rgba(0,0,0,0.05)',
      border: '0.0625rem solid #f4e6d4',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    },
    langLabel: {
      backgroundColor: '#c64c24', 
      color: 'white',
      padding: '0.5rem 1.5625rem',
      borderRadius: '0.75rem',
      fontWeight: 'bold',
      fontSize: '1rem',
      display: 'inline-block',
      marginBottom: '0.625rem' 
    },
    textareaWrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    },
    textarea: {
      width: '100%',
      border: '0.0625rem solid #ddd',
      borderRadius: '0.9375rem',
      padding: '0.9375rem',
      minHeight: isMobile ? '7.5rem' : '11.25rem',
      outline: 'none',
      resize: 'none',
      fontSize: '1rem',
      color: '#444',
      boxSizing: 'border-box', 
      fontFamily: 'inherit',
      backgroundColor: 'white'
    },
    footerRow: {
      display: 'flex',
      justifyContent: 'space-between', 
      alignItems: 'center',
      marginTop: '0.5rem',
      padding: '0 0.3125rem',
      color: '#888',
      fontSize: '0.8rem'
    },
    swapCircle: {
      backgroundColor: 'white',
      border: '0.0625rem solid #f4e6d4',
      borderRadius: '50%',
      width: '2.8125rem',
      height: '2.8125rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#8d6e63',
      margin: isMobile ? '0.9375rem auto' : '0 auto', 
      cursor: 'pointer', // Agregado para que se vea clickeable
    },
    btnTranslate: {
      backgroundColor: '#3d8c56', 
      color: 'white',
      border: 'none',
      padding: '0.75rem 2.1875rem',
      borderRadius: '1.875rem',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '0.625rem',
      cursor: 'pointer',
      margin: '1.5625rem auto 0'
    },

    // --- ESTILOS EXCLUSIVOS PC (GRID) ---
    pcHeaderGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      justifyItems: 'center',
      gap: '1.25rem',
      marginBottom: '0.9375rem'
    },
    pcInputsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.875rem',
      width: '100%'
    },
    
    // --- ESTILOS PARA FRASES COMUNES ---
    header: {
      fontSize: "2rem",
      fontWeight: "900",
      color: "#5a3d2b",
      marginBottom: "1.875rem",
      display: "flex",
      alignItems: "center",
      gap: "0.625rem",
      textAlign: "center",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
      gap: "1.25rem",
      width: "100%",
      maxWidth: "50rem",
      padding: isMobile ? '0 0.5rem' : '0', 
      boxSizing: 'border-box',
    },

    frasescard: {
      backgroundColor: "white",
      width: "100%",
      maxWidth: isMobile ?  "calc(100% - 2rem)" : "53.124rem",
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
    },
    
    // --- HISTORIAL DE TRADUCCIONES ---
    textareaWrapperHistorial: {
      width: '80%',
      display: 'flex',
      boxSizing: 'border-box'
    },
    textareahistorial: {
      width: '80%',
      border: '0.0625rem solid #ddd',
      borderRadius: '1.6875rem',
      minHeight: isMobile ? '7.5rem' : '11.25rem',
      resize: 'none',
      fontSize: '1rem',
      boxSizing: 'border-box', 
      fontFamily: 'inherit',
      backgroundColor: 'white'
    },
    waveSvg: {
      display: 'block',
      width: '100%',
      height: 'auto'
    },
    waveShape: {
      fill: '#C4451C'
    },
  };

  return (
    <div style={styles.container}>
      
      {/* TEXTO DEL ENCABEZADO */}
      <div style={styles.headerText}>
        <h1> Traductor De Runa Shimi 🌿</h1>
        <p>
          Conecta con las raíces ancestrales a través de la lengua Runa Shimi.
        </p>
      </div>

      {/* TARJETA */}
      <div style={styles.card}>
        
        {isMobile ? (
          <>
            {/* Cuadro de Origen (Móvil) */}
            <div style={styles.textareaWrapper}>
              <div style={{alignSelf: 'flex-start'}}>
                <div style={styles.langLabel}>
                  {isEspanolToRuna ? 'ESPAÑOL' : 'RUNA SHIMI'}
                </div>
              </div>

              <textarea 
                style={styles.textarea}
                placeholder={isEspanolToRuna ? "Escribe aquí en español..." : "Escribe aquí en runa shimi..."}
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={300}
              />

              <div style={styles.footerRow}>
                <span>{text.length}/300</span>
              </div>
            </div>

            {/* Botón de Intercambio (Móvil) */}
            <div style={styles.swapCircle} onClick={handleSwapLanguages}>
              <ArrowLeftRight size={20} />
            </div>

            {/* Cuadro de Destino (Móvil) */}
            <div style={styles.textareaWrapper}>
              <div style={{alignSelf: 'flex-start'}}>
                <div style={styles.langLabel}>
                  {isEspanolToRuna ? 'RUNA SHIMI' : 'ESPAÑOL'}
                </div>
              </div>

              <textarea 
                style={styles.textarea}
                placeholder="La traducción aparecerá aquí..."
                value={translatedText}
                readOnly
              />

              <div style={styles.footerRow}>
                <span></span> 
                <Copy size={18} style={{cursor: 'pointer'}} />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Encabezados y Botón de Intercambio (PC) */}
            <div style={styles.pcHeaderGrid}>
              <div style={styles.langLabel}>
                {isEspanolToRuna ? 'ESPAÑOL' : 'RUNA SHIMI'}
              </div>
              <div style={styles.swapCircle} onClick={handleSwapLanguages}>
                <ArrowLeftRight size={20} />
              </div>
              <div style={styles.langLabel}>
                {isEspanolToRuna ? 'RUNA SHIMI' : 'ESPAÑOL'}
              </div>
            </div>

            <div style={styles.pcInputsGrid}>
              {/* Cuadro de Origen (PC) */}
              <div style={styles.textareaWrapper}>
                <textarea 
                  style={styles.textarea}
                  placeholder={isEspanolToRuna ? "Escribe aquí en español..." : "Escribe aquí en runa shimi..."}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  maxLength={300}
                />

                <div style={styles.footerRow}>
                  <span>{text.length}/300</span>
                </div>
              </div>

              {/* Cuadro de Destino (PC) */}
              <div style={styles.textareaWrapper}>
                <textarea 
                  style={styles.textarea}
                  placeholder="La traducción aparecerá aquí..."
                  value={translatedText}
                  readOnly
                />

                <div style={styles.footerRow}>
                  <span></span>
                  <Copy size={20} style={{cursor: 'pointer'}} />
                </div>
              </div>
            </div>
          </>
        )}

        <button style={styles.btnTranslate}>
          Traducir <RefreshCw size={20} />
        </button>

      </div>

      {/* FRASES COMUNES */}
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
      
      {/* HISTORIAL DE TRADUCCIONES */}
      <Historial historial={historial} />
      
      {/* Diccionario */}
      <div style={{ width: '100%', marginBottom: '5rem', display: 'flex', flexDirection: 'column' }}>
        <Diccionario />
      </div>
      
      {/* Acerca */}
     <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <Acerca />
      </div>
      
    </div>
  );
}

export default Traductor;