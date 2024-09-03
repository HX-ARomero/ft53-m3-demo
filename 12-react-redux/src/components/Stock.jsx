import React from "react";
import { useDispatch } from "react-redux";
import { agregarProducto } from "../redux/carritoSlice";

export default function Stock() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Productos en Stock</h2>

      <button
        onClick={() =>
          dispatch(agregarProducto({ title: "Teclado", price: 100 }))
        }
      >
        Teclado - $100
      </button>
      <button
        onClick={() =>
          dispatch(agregarProducto({ title: "Monitor", price: 200 }))
        }
      >
        Monitor - $200
      </button>
      <button
        onClick={() =>
          dispatch(agregarProducto({ title: "Auriculares", price: 300 }))
        }
      >
        Auriculares - $300
      </button>
    </div>
  );
}
