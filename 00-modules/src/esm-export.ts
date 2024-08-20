//* ECMAScript Modules - Exportación
//* En entorno V8

export default (nombre: string):void => console.log(`Hola ${nombre}`);

const lenny = "Lenny";
const carl = "Carl";

export {
  lenny,
  carl,
}

//* export = { lenny, carl }