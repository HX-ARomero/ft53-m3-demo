import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const isRegistered = false;

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        padding: "20px",
        borderRadius: "20px"
      }}
    >
      <h1>Primer aplicación en REACT</h1>
      <hr />

      {/* Renderizado Condicional con "&&" */}
      {isRegistered && (<h3>Por favor, inicia sesión...</h3>)}
      {!isRegistered && (<h3>Por favor, regístrate...</h3>)}

      {/* Renderizado Condicional con "?" */}
      {isRegistered ? <Login /> : <Register />}
    </div>
  );
}

export default App;
