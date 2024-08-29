import { useState, useEffect } from "react";
import "./App.css";
import Tarjeta from "./components/Tarjeta";
import Detalle from "./components/Detalle";

function App() {
  const [personajes, setPersonajes] = useState([]);
  //* personajes = [ {name, house}, {name, house}, ... ]
  const [detail, setDetail] = useState(false);
  const [id, setId] = useState(0);

  const clickHandler = (id) => {
    setId(id);
    setDetail(true);
  };

  const closeHandler = () => {
    setDetail(false);
  };

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((respuesta) => respuesta.json())
      .then((datos) => datos.slice(0, 5))
      .then((personajesDesdeApi) => setPersonajes(personajesDesdeApi));
  }, []);

  return (
    <>
      <h1>Harry Potter App</h1>
      {personajes.map((personaje) => (
        <Tarjeta
          key={personaje.id}
          personaje={personaje}
          clickHandler={clickHandler}
        />
      ))}
      {detail && <Detalle id={id} closeHandler={closeHandler} />}
    </>
  );
}

export default App;
