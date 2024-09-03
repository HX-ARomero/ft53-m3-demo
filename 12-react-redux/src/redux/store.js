import carritoSlice from "./carritoSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    carrito: carritoSlice,
  },
});

//* state = { carrito }

export default store;
