export default function ToDoList({ allTodos }) {
  //* allTodos = [ "1", "2", "3", ... ]
  return(
    <div>
      <h2>Lista de tareas:</h2>
      <ul>
        {
          allTodos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))
        }
      </ul>
    </div>
  )
}