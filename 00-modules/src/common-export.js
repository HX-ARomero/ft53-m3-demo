//* COMMON JS - Exportación
//* En entorno Node JS

module.exports.sumar = (a, b) => a + b;
module.exports.num1 = 2;
module.exports.num2 = 3;

// module.exports = 7;


//* module.exports = { sumar, num1, num2 }
console.log("module.exports: ", module.exports);