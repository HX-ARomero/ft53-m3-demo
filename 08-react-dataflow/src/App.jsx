import "./App.css";
import AddToDo from "./components/AddToDo";
import ToDoCounter from "./components/ToDoCounter";
import { useState } from "react";
import ToDoList from "./components/ToDoList";

function App() {
  const [contadorEstado, setConadorEstado] = useState(0);
  const [allTodos, setAllTodos] = useState([]);
  //* [ "tarea1", "tarea2" ]

  return (
    <>
      <h1>ToDo List</h1>
      <hr />
      <AddToDo
        setAllTodos={setAllTodos}
        setConadorEstado={setConadorEstado}
      />

      <ToDoCounter
        contadorEstado={contadorEstado}
        titulo={"Tareas pendientes: "}
      />

      <ToDoList
        allTodos={allTodos}
      />
    </>
  );
}

export default App;
