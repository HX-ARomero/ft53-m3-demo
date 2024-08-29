export default function Tarjeta({ personaje, clickHandler }) {
  //* props = { personaje, clickHandler}
  const { id, name, house } = personaje;
  // console.log(clickHandler(id));
  
  return (
    <div style={{backgroundColor: "darkslategrey", borderRadius: "10px"}}>
      <h2>Personaje: {name}</h2>
      <h3>Casa: {house}</h3>
      <button onClick={() => clickHandler(id)}>Ver Detalle</button>
    </div>
  )
}
