const nombrePropiedad = "apellido";
const valorPropiedad = "Simpson";

const usuario = {
  nombre: "Homero",
  //* PROPIEDADES DINÁMICAS:
  [nombrePropiedad]: valorPropiedad,
};

console.log(usuario);
