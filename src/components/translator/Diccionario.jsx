import React, { useState } from "react";

const Diccionario = () => {
  const [palabras, setPalabras] = useState([
    { esp: "Gracias", runa: "Yupaychani" },
    { esp: "Hola", runa: "Imanalla" },
    { esp: "tierra", runa: "allpa" },
    { esp: "Agua", runa: "Yaku" },
    { esp: "Sol", runa: "Inti" },
    { esp: "Luna", runa: "Killa" }
  ]);

  return (
    <div>
      <h1>Diccionario</h1>5
      <ul>
        {palabras.map((palabra, index) => (
          <li key={index}>
            <strong>{palabra.esp}</strong> - {palabra.runa}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Diccionario;