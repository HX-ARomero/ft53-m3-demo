export default function ToDoCounter({ contadorEstado, titulo }) {
  //* props = { contadorEstado: 5, titulo: "Tareas pendientes: " }
  // console.log("props: ", props);

  return (
    <div style={{ backgroundColor: "darkslategrey", padding: "5px"}}>
      <h2>ToDoCounter: Componente Hijo</h2>
      <h3>{titulo} {contadorEstado}</h3>
    </div>
  )
}