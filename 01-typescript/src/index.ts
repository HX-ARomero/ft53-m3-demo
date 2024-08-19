import suma from "./helpers/suma";

const num1 = 4; // Inferencia del tipo de dato

// const num3 = 5;

/* eslint-disable */
let num2: number = 15; // Declaración explícita

// console.log(suma(num1, num2));

//* NUMBERS ----- -----
const claveGuardada: number = 1234;
const valorIngresado: string = "Hola";
const claveIngresada: number = Number(valorIngresado);
// console.log("claveIngresada: ", claveIngresada);

if (claveGuardada === claveIngresada) {
  // Dar Acceso
}

//* STRINGS
const marge: string = "Marge";
const ciudad: string = "Springfield";
const lisa: string = `Lisa vive en ${ciudad}`;

// lisa[200] ? console.log(lisa[200]) : console.log("No definido");

//* BOOLEANS
let access: boolean = false;

// console.log(access); // false

access = 9 && true;
// console.log(access); // true

// access = 0 && true;
// console.log(access); // 0

function resta(a: any, b: any) {
  return a + b;
}
// console.log(resta({ z: 8 }, [0, 1]));

let miVariable: any = null;
miVariable = "Bart";
// Aserción de Tipo "as"
const nuevaVariable = miVariable as string; //* : string

nuevaVariable.toLocaleLowerCase();

//* INFERENCIA DE DATOS ----- -----
const nombre: number = 8; //* :
// console.log(nombre.toUpperCase());