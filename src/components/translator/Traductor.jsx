import React, { useState, useEffect } from 'react';
import { ArrowLeftRight, RefreshCw, Copy } from 'lucide-react';

const Traductor = ({ onGoToLogin }) => {
  const [text, setText] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  const styles = {
    // --- CONTENEDOR PRINCIPAL BLINDADO ---
    container: {
      flex: 1,
      width: '100%',

      paddingTop: isMobile ? '40px' : '40px',
      paddingRight: isMobile ? '15px' : '20px',
      paddingBottom: '20px',
      paddingLeft: isMobile ? '80px' : '20px', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
    },
    headerText: {
      textAlign: 'center',
      color: '#5d4037',
      width: '100%',
      maxWidth: '600px',
      marginBottom: '25px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      overflowWrap: 'break-word', 
    },
    
    // --- ESTILOS DE LA TARJETA ---
    card: {
      backgroundColor: 'white', 
      width: '100%',
      maxWidth: '850px', 
      borderRadius: '30px',
      padding: isMobile ? '20px' : '35px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
      border: '1px solid #e0e0e0',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    },

    // --- ESTILOS COMPARTIDOS ---
    langLabel: {
      backgroundColor: '#c64c24', 
      color: 'white',
      padding: '8px 25px',
      borderRadius: '12px',
      fontWeight: 'bold',
      fontSize: '1rem',
      display: 'inline-block',
      marginBottom: '10px' 
    },
    textareaWrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    },
    textarea: {
      width: '100%',
      border: '1px solid #ddd',
      borderRadius: '15px',
      padding: '15px',
      minHeight: isMobile ? '120px' : '180px',
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
      marginTop: '8px',
      padding: '0 5px',
      color: '#888',
      fontSize: '0.8rem'
    },
    swapCircle: {
      backgroundColor: 'white',
      border: '1px solid #ddd',
      borderRadius: '50%',
      width: '45px',
      height: '45px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#8d6e63',
      margin: isMobile ? '15px auto' : '0 auto', 
    },
    btnTranslate: {
      backgroundColor: '#3d8c56', 
      color: 'white',
      border: 'none',
      padding: '12px 35px',
      borderRadius: '30px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      margin: '25px auto 0'
    },

    // --- ESTILOS EXCLUSIVOS PC (GRID) ---
    pcHeaderGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      justifyItems: 'center',
      gap: '20px',
      marginBottom: '15px'
    },
    pcInputsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '30px',
      width: '100%'
    }
  };

  return (
    <div style={styles.container}>
      
      {/* TEXTO DEL ENCABEZADO */}
      <div style={styles.headerText}>
        <h1 style={{fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: '800', margin: '0 0 10px 0'}}>
          Traductor De Runa Shimi 🌿
        </h1>
        <p style={{fontSize: isMobile ? '0.9rem' : '1.1rem', fontWeight: '600', margin: 0}}>
          Conecta con las raíces ancestrales a través de la lengua Runa Shimi.
        </p>
      </div>

      {/* TARJETA DINÁMICA */}
      <div style={styles.card}>
        
        {isMobile ? (
          /* ===============================
                VERSIÓN MÓVIL (Como la Imagen 2)
             =============================== */
          <>
            <div style={styles.textareaWrapper}>
              <div style={{alignSelf: 'flex-start'}}><div style={styles.langLabel}>ESPAÑOL</div></div>
              <textarea 
                style={styles.textarea}
                placeholder="Escribe aquí en español..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={300}
              />
              <div style={styles.footerRow}>
                <span>{text.length}/300</span>
              </div>
            </div>

            <div style={styles.swapCircle}><ArrowLeftRight size={20} /></div>

            <div style={styles.textareaWrapper}>
              <div style={{alignSelf: 'flex-start'}}><div style={styles.langLabel}>RUNA SHIMI</div></div>
              <textarea 
                style={styles.textarea}
                placeholder="La traducción aparecerá aquí..."
                readOnly
              />
              <div style={styles.footerRow}>
                <span></span> 
                <Copy size={18} style={{cursor: 'pointer'}} />
              </div>
            </div>
          </>
        ) : (
          /* ===============================
                VERSIÓN PC (Lado a Lado)
             =============================== */
          <>
            <div style={styles.pcHeaderGrid}>
              <div style={styles.langLabel}>ESPAÑOL</div>
              <div style={styles.swapCircle}><ArrowLeftRight size={20} /></div>
              <div style={styles.langLabel}>RUNA SHIMI</div>
            </div>

            <div style={styles.pcInputsGrid}>
              <div style={styles.textareaWrapper}>
                <textarea 
                  style={styles.textarea}
                  placeholder="Escribe aquí en español..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  maxLength={300}
                />
                <div style={styles.footerRow}>
                  <span>{text.length}/300</span>
                </div>
              </div>

              <div style={styles.textareaWrapper}>
                <textarea 
                  style={styles.textarea}
                  placeholder="La traducción aparecerá aquí..."
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
    </div>
  );
};

export default Traductor;