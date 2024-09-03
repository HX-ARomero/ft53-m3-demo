import { createSlice } from "@reduxjs/toolkit";

const estadoInicial = [];

const carritoSlice = createSlice({
  //* Nombre del Slice:
  name: "carrito",
  //* Estado Inicial:
  initialState: estadoInicial,
  reducers: {
    agregarProducto: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
    quitarProducto: (state, action) => {
      return state.filter((producto) => producto.title !== action.payload);
    },
  },
});

// console.log(carritoSlice);
// carritoSlice.actions.agregarProducto({title, price});
//* Exportamos acciones:
export const { agregarProducto, quitarProducto } = carritoSlice.actions;
//* Exportamos recucer:
export default carritoSlice.reducer;
