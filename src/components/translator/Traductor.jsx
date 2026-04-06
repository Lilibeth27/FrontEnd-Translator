import React, { useState } from 'react';
import { ArrowLeftRight, RefreshCw, Copy } from 'lucide-react';

const Traductor = () => {
  const [text, setText] = useState('');

  const styles = {
    container: {
      flex: 1,
      backgroundColor: '#f4ece1',
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px'
    },
    headerTitle: {
      fontSize: '2.5rem',
      color: '#3e2723',
      fontWeight: '800',
      marginBottom: '10px'
    },
    card: {
      background: 'white',
      width: '100%',
      maxWidth: '800px',
      borderRadius: '30px',
      padding: '30px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
    },
    langSelectors: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: '30px'
    },
    langBtn: {
      backgroundColor: '#bf360c',
      color: 'white',
      border: 'none',
      padding: '12px 35px',
      borderRadius: '12px',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      cursor: 'pointer'
    },
    swapIcon: {
      color: '#888'
    },
    textAreas: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginBottom: '20px'
    },
    inputGroup: {
      position: 'relative'
    },
    textarea: {
      width: '100%',
      height: '200px',
      border: '1px solid #ddd',
      borderRadius: '15px',
      padding: '15px',
      resize: 'none',
      fontFamily: 'inherit',
      fontSize: '1rem',
      outline: 'none',
      boxSizing: 'border-box'
    },
    charCount: {
      fontSize: '0.8rem',
      color: '#888',
      marginTop: '5px',
      display: 'block'
    },
    actionContainer: {
      display: 'flex',
      justifyContent: 'center'
    },
    btnTranslate: {
      backgroundColor: '#388e3c',
      color: 'white',
      border: 'none',
      padding: '12px 30px',
      borderRadius: '12px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer'
    },
    copyIcon: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      color: '#888',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Traductor De Runa Shimi 🌿</h1>
        <p>Conecta con las raíces ancestrales a través de la lengua Runa Shimi.</p>
      </header>

      <div style={styles.card}>
        <div style={styles.langSelectors}>
          <button style={styles.langBtn}>ESPAÑOL</button>
          <ArrowLeftRight style={styles.swapIcon} />
          <button style={styles.langBtn}>RUNA SHIMI</button>
        </div>

        <div style={styles.textAreas}>
          <div style={styles.inputGroup}>
            <textarea 
              style={styles.textarea}
              placeholder="Escribe aquí en español..."
              maxLength={300}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <span style={styles.charCount}>{text.length}/300</span>
          </div>

          <div style={styles.inputGroup}>
            <textarea 
              style={styles.textarea}
              readOnly 
              placeholder="La traducción aparecerá aquí..."
            />
            <Copy style={styles.copyIcon} size={18} />
          </div>
        </div>

        <div style={styles.actionContainer}>
          <button style={styles.btnTranslate}>
            Traducir <RefreshCw size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Traductor;
