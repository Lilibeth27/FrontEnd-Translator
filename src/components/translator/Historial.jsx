import React,{useState} from "react";

const Historial = ({  }) => {
  const [historial, setHistorial] = useState([
  {
    esp: "Gracias",
    runa: "Yupaychani",
    fecha: "19 Mar, 10:30 AM"
  },
  {
    esp: "Hola",
    runa: "Imanalla",
    fecha: "19 Mar, 11:00 AM"
  }
]);
  const styles = {
 historialContainer: {
  width: '100%',
  maxWidth: '800px',
  marginTop: '30px',
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
  minWidth: '150px'
},

iconCalendar: {
  fontSize: '20px'
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
  cursor: 'pointer'
},

icon: {
  cursor: 'pointer'
},

  };
    return (
        <div style={styles.historialContainer}>
  
  <h1 style={styles.header}>
    Tu Historial de Traducciones <span>📚</span>
  </h1>

  {historial.map((item, index) => (
    <div key={index} style={styles.cardHistorial}>
      
      {/* ONDA SUPERIOR */}
      <div style={{
        ...styles.waveTop,
        backgroundColor: index % 2 === 0 ? '#C4451C' : '#4A7C59'
      }}>
        <svg viewBox="0 0 100 20" preserveAspectRatio="none" style={styles.waveSvg}>
          <path
            d="M0,10 C15,0 35,20 50,10 C65,0 85,20 100,10 V0 H0 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* CONTENIDO */}
      <div style={styles.cardContent}>
        
        {/* IZQUIERDA */}
        <div style={styles.leftSection}>
          <div style={styles.iconCalendar}>📅</div>
          <span style={styles.fecha}>{item.fecha}</span>
        </div>

        {/* TEXTO */}
        <div style={styles.textSection}>
          <p><strong>Español:</strong> {item.esp}</p>
          <p><strong>Runa Shimi:</strong> {item.runa}</p>
        </div>

        {/* DERECHA */}
        <div style={styles.actions}>
          <span style={styles.icon}>❤️</span>
          <span style={styles.icon}>📋</span>
        </div>

      </div>
    </div>  
  ))}

</div>
 );
}
export default Historial;