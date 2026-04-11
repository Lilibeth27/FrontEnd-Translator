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
      height: '100vh',
      overflowY: 'auto',
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
      border: '1px solid #f4e6d4',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    },
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
      border: '1px solid #f4e6d4',
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
    },
    ///  estilos para frases comunes 
   

    header: {
      fontSize: "32px",
      fontWeight: "900",
      color: "#5a3d2b",
      marginBottom: "30px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      textAlign: "center",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px",
      width: "100%",
      maxWidth: "800px",
    },

    frasescard: {
      backgroundColor: "white",
      borderRadius: "30px",
      padding: "15px 25px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    },

    icon: {
      fontSize: "30px",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
    },

    espText: {
      fontSize: "13px",
      color: "#7a7a7a",
    },

    runaText: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#2d5a42",
      margin: 0,
    },
    //HISTORIAL DE TRADUCCIONES 
     textareaWrapperHistorial: {
      width: '80%',
      display: 'flex',
    
      boxSizing: 'border-box'
  },
  textareahistorial: {
      width: '80%',
      border: '1px solid #ddd',
      borderRadius: '27px',
      minHeight: isMobile ? '120px' : '180px',
      resize: 'none',
      fontSize: '1rem',
      boxSizing: 'border-box', 
      fontFamily: 'inherit',
      backgroundColor: 'white'
    },

};
return (
  <div style={styles.container}>
    
    {/* TEXTO DEL ENCABEZADO */}
    <div style={styles.headerText}>
      <h1> Traductor De Runa Shimi 🌿
      </h1>
      <p>
        Conecta con las raíces ancestrales a través de la lengua Runa Shimi.
      </p>
    </div>

    {/* TARJETA */}
    <div style={styles.card}>
      
      {isMobile ? (
        <>
          <div style={styles.textareaWrapper}>
            <div style={{alignSelf: 'flex-start'}}>
              <div style={styles.langLabel}>ESPAÑOL</div>
            </div>

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

          <div style={styles.swapCircle}>
            <ArrowLeftRight size={20} />
          </div>

          <div style={styles.textareaWrapper}>
            <div style={{alignSelf: 'flex-start'}}>
              <div style={styles.langLabel}>RUNA SHIMI</div>
            </div>

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
        <>
          <div style={styles.pcHeaderGrid}>
            <div style={styles.langLabel}>ESPAÑOL</div>
            <div style={styles.swapCircle}>
              <ArrowLeftRight size={20} />
            </div>
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

    {/*  FRASES COMUNES */}
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
    <div>
      <h1 style={styles.header}>
        Tu Historial de Traducciones <span>📚</span></h1></div>
       <div style={styles.textareaWrapperHistorial}>
             <textarea 
              style={styles.textareahistorial}
              value={text} /></div>

  </div>
);
}
export default Traductor;