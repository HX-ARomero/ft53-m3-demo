import React, { useEffect, useState } from "react";
import styles from "../styles/styles.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const GETCHARACTERBYID_URL = "https://dragonball-api.com/api/characters/";

export default function Detail(props) {
  const { id } = useParams();
  // console.log(params.id);
  // console.log(id);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios
      .get(GETCHARACTERBYID_URL + id)
      .then(({ data }) => data)
      .then((character) => setCharacter(character))
      .catch((error) => console.log(error.message));
  }, [id]);

  //* Limpiamos estado antes de desmontar el componente:
  useEffect(
    () => () => {
      setCharacter({});
    },
    []
  );

  return (
    <div className={styles.container}>
      <h2>Detalle</h2>
      <hr />
      <h3>Nombre: {character?.name}</h3>
      <h4>Ki: {character?.ki}</h4>
      <h4>Raza: {character?.race}</h4>
      {character.image ? (
        <img src={character?.image} alt={character.name} />
      ) : (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
      )}
    </div>
  );
}
