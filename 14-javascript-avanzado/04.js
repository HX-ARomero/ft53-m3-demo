function busquedaSuma(array, numero) {
  let pasos = 0;
  let resultado = false;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      pasos++;
      if (array[i] + array[j] === numero) {
        resultado = true;
        break;
      }
    }
  }
  console.log({ resultado, datos: array.length, pasos });
  return;
}

function arrayGenerador(n) {
  const newArray = [];
  for (let i = 0; i < n; i++) {
    newArray.push(i);
  }
  return newArray;
}

busquedaSuma(arrayGenerador(10), 100); //* [ 0, 1, 2, ..., 9 ]
busquedaSuma(arrayGenerador(100), 1000);
busquedaSuma(arrayGenerador(1000), 10000);
busquedaSuma(arrayGenerador(10000), 100000);
//* n = n^2
//* 10.000 = 100.000.000