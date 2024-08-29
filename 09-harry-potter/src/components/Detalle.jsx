import { useEffect, useState } from "react";

export default function Detalle({ id, closeHandler }) {
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/character/${id}`)
      .then((respuesta) => respuesta.json())
      .then((datos) => datos[0])
      .then((personajeDesdeApi) => setPersonaje(personajeDesdeApi));
  }, [id]);

  return (
    <div style={{ backgroundColor: "darkslategrey", borderRadius: "10px" }}>
      <h2>Detalle</h2>
      <button onClick={closeHandler}>Cerrar Detalle</button>
      <h3>Nombre: {personaje?.name}</h3>
      <h4>Casa: {personaje?.house}</h4>
      <h4>Especie: {personaje?.species}</h4>
      <img
        src={personaje.image}
        alt={personaje.name}
        style={{ height: "200px" }}
      />
    </div>
  );
}
