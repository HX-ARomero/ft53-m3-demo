//* TIPADO DÉBIL: JS infiere el tipo de dato
let usuario = {
  nombre: "Homero",
  apellido: "Simpson",
};

let clave = "1234";

//* Mas código

//* TIPADO DINÁMICO: JS permite cambiar el tipo de dato
usuario2 = "Lisa";
clave2 = 1234;

function saludar(nombre) {
  console.log(`Hola ${nombre.toUpperCase()}`);
}

saludar(usuario2);
saludar(clave2);