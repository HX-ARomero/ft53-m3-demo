export default function validateUser({ username, password }) {
  const regexEmail = /\S+@\S+\.\S+/;          // texto@texto.texto
	const regexLetras = /(?=.*[A-Za-z])/;       // Al menos una letra
	const regexNumeros = /(?=.*\d)/;            // Al menos un número
	const regexEspeciales = /(?=.*[@$!%*?&#])/; // @$!%*?&#

  const errors = {};

  //* username
  if(!username) {
    errors.username = "Username es requerido"
  } else {
    if(!regexEmail.test(username)) {
      errors.username = "Username es debe ser un email"
    }
  }

  //* password
  if(!password) {
    errors.password = "Password es requerido"
  } else {
    if(password.length < 4) {
      errors.password = "Password de al menos 4 caracteres"
    }
    if(password.length > 6) {
      errors.password = "Password de a lo sumo 6 caracteres"
    }
    if(!regexLetras.test(password)) {
      errors.password = "Al menos una letra"
    }
    if(!regexNumeros.test(password)) {
      errors.password = "Al menos un número"
    }
    if(!regexEspeciales.test(password)) {
      errors.password = "Al menos un caracter especial @$!%*?&#"
    }
  }

  return errors;
};

console.log(validateUser({
  username: "a@b.",
  password: "1#a",
}));