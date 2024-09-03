const AGREGAR_PRODUCTO = "AGREGAR_PRODUCTO";
const QUITAR_PRODUCTO = "QUITAR_PRODUCTO";

function agregarProducto(producto) {
  return {
    type: AGREGAR_PRODUCTO,
    payload: producto,
  };
}

function quitarProducto(id) {
  return {
    type: QUITAR_PRODUCTO,
    payload: id,
  };
}

module.exports = {
  AGREGAR_PRODUCTO,
  QUITAR_PRODUCTO,
  agregarProducto,
  quitarProducto,
};

// console.log(agregarProducto({ id:1, name: "Monitor"}));
// console.log(quitarProducto(1));

// const carritoEjemplo = [
//   { id: 1, name: "Monitor" },
//   { id: 2, name: "Teclado" },
//   { id: 3, name: "Mouse" },
// ];
