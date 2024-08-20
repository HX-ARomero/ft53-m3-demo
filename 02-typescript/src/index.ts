//? EJERCICIO 1 ----- -----
function saludar(nombre: string): string {
  return `¡Hola, ${nombre}! ¿Cómo estás?`;
}
// Tipado "IMPLÍCITO" en "const":
const mensaje = saludar("Homero");
console.log(mensaje);
// Tipado "EXPLÍCITO" en "const":
const nuevoMensaje: string = saludar("Marge");
console.log(nuevoMensaje);

//? EJERCICIO 2 ----- -----
function suma(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(suma(5, 3));

//? EJERCICIO 3 ----- -----
function esPar(numero: number): boolean {
  return numero % 2 === 0;
}
console.log(esPar(5));

//? EJERCICIO 4 ----- -----
function crearUsuario(nombre: string, edad: number): void {
  if (edad) {
    console.log(`Usuario ${nombre} de ${edad} años de edad `);
  } else {
    console.log(`Usuario ${nombre} de edad no especificada`);
  }
}
crearUsuario("Ana", 25);

//? EJERCICIO 5 ----- -----
function obtenerLongitud(arr: string[]): number {
  return arr.length;
}
const frutas: string[] = ["manzana", "banana", "naranja"];
console.log(obtenerLongitud(frutas));

//? EJERCICIO 6 ----- -----
function mostrarInfoPersona(persona: { nombre: string, edad: number }): void {
  console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
}
// Tipado "IMPLÍCITO" en "const":
const persona1 = { nombre: "María", edad: 30 };
mostrarInfoPersona(persona1);

//? EJERCICIO 7 ----- -----
const nuevoUsuario: any = { nombre: "Bart", edad: 10 };
// Hacer que lo siguiente detecte el error "sin modificar la línea anterior":
const usuarioTipado = nuevoUsuario as { nombre: string, edad: number };
// console.log(usuarioTipado.email);