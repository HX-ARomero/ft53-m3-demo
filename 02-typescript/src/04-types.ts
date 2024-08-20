//* UNION TYPES
let otraVariable: string | undefined;

console.log(otraVariable);
otraVariable = "Nuevo Valor";

type TRoles = "admin" | "invitado" | "registrado";

function tienePernisos(rol: TRoles): string {
  if (rol === "admin") {
    return "OK";
  } else {
    return "Sin perniso";
  }
}

// console.log(tienePernisos("invitado"));

//* ALIAS
type TCarrera = {
  nombre: string;
  modalidad: string;
};

type TEstudiante = {
  nombre: string,
  carrera: TCarrera,
  permiso: TRoles,
}

const milhouse: TEstudiante & { email: string } = {
  nombre: "Milhouse",
  carrera: {
    nombre: "FullStack",
    modalidad: "FullTime",
  },
  permiso: "registrado",
  email: "milhouse@mail.com",
};
