//* TIPOS PERSONALIZADOS
type TContacto = {
  email: string;
  celular: number;
};

enum THobbies {
  MUSICA = "Música",
  TELE = "Mirar Tele",
  AJEDREZ = "Ajedrez",
  CODEAR = "Codear",
}

//* INTERFACES
interface IUsuario {
  id: number;
  nombre: string;
  hobbies: THobbies[];
  contacto: TContacto;
}

const lenny: IUsuario = {
  id: 1,
  nombre: "Lenny",
  hobbies: [THobbies.MUSICA, THobbies.TELE],
  contacto: {
    email: "lenny@mail.com",
    celular: 123456789,
  },
};

console.log(lenny);
