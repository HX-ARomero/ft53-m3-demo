const { agregarProducto, quitarProducto } = require("./redux/actions");
const store = require("./redux/store");

console.log(store.getState());

store.dispatch({
  type: "AGREGAR_PRODUCTO",
  payload: { id: 1, name: "Monitor" },
});

store.dispatch(agregarProducto({ id: 2, name: "Teclado" }));

store.dispatch(quitarProducto(1));

console.log(store.getState());
