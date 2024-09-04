import { lazy, Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import Characters from "./components/Characters";
const Characters = lazy(() => import("./components/Characters"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Frontend Avanzado</h1>
      <hr />
      <Navbar />
      <hr />
      <Suspense fallback={<p>Cargando...</p>}>
          <Characters />
      </Suspense>
    </>
  );
}

export default App;
