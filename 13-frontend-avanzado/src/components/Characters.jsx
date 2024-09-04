import React from "react";
import useFetch from "../hooks/useFetch";
const URL = "https://rickandmortyapi.com/api/location";

export default function Characters() {
  const { data, error } = useFetch("location");
  // const { data, error } = useFetch("episode");
  // const { data, error } = useFetch("location");

  return (
    <div>
      <h2>Listado de personajes</h2>
      {/* Mapeo de data */}
      {data ? (
        data?.results.map((character) => (
          <div key={character.id}>
            <p>{character.name}</p>
          </div>
        ))
      ) : (
        <div>
          <p>{error?.message}</p>
        </div>
      )}
    </div>
  );
}
