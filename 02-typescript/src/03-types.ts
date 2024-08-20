//* TIPOS PERSONALIZADOS

type TAnimal = {
  especie: string;
};

//* MERGING: NO PERMITIDO
// type TAnimal = {
//   nombre: "string";
// }

//* EXTENSIÓN
type TMascota = TAnimal & {
  nombre: string;
  edad: number;
};

const perro: TAnimal = {
  especie: "perro",
};

const huesos: TMascota = {
  especie: "perro",
  nombre: "Huesos",
  edad: 7,
};

const ayudanteDeSanta: Omit<TMascota, "especie"> = {
  nombre: "Huesos",
  edad: 7,
};

const bolaDeNieve: Partial<TMascota> = {
  nombre: "bolaDeNieve",
};
