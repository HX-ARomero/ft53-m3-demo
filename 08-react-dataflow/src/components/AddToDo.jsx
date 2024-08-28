import { useState } from "react";

export default function AddToDo({ setAllTodos, setConadorEstado }) {
  const [newTodo, setNewtodo] = useState("");
  const handleInputChange = (evento) => {
    //* evento = { target: { value: "ab" } }
    // console.log(evento);
    setNewtodo(evento.target.value);
  };

  const handleSubmit = () => {
    setAllTodos((allTodos) => (allTodos = [...allTodos, newTodo]));
    setConadorEstado(contadorEstado => contadorEstado = contadorEstado + 1)
  };

  return (
    <>
      <label>Ingresar nueva tarea:</label>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleSubmit}>Agregar tarea</button>
    </>
  );
}
