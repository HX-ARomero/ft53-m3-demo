//* INTERFAZ
interface IPersona {
  nombre: string;
  apellido: string;
}

//* MERGING
interface IPersona {
  edad: number;
}

//* EXTENSIÓN
interface IEmpleado extends IPersona {
  cargo: string,
}

const marge: IPersona = {
  nombre: "Marge",
  apellido: "Bubbie",
  edad: 40,
};

const homero: IEmpleado = {
  nombre: "Homero",
  apellido: "Simpson",
  edad: 40,
  cargo: "Jefe de seguridad",
};

const lisa: Omit<IPersona, "edad"> = {
  nombre: "Lisa",
  apellido: "Simpson",
};

const bart: Partial<IPersona> = {
  nombre: "Bart",
};

// console.log(noExiste);