function findMax(lista) {
  mayor = lista[0];
  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
  }
  return mayor;
}

function includes(lista, numero) {
  controlador = false;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numero) {
      controlador = true;
      break;
    }
  }
  return controlador;
}

function sum(lista) {
  contador = 0;
  for (let i = 0; i < lista.length; i++) {
    contador += lista[i];
  }
  return contador;
}

function missingNumbers(lista) {
  for (let i = 0; i - 1 < lista.length; i++) {
    for (let j = i + 1; j < lista.length; j++) {
      if (lista[j] < lista[i]) {
        temp = lista[i];
        lista[i] = lista[j];
        lista[j] = temp;
      }
    }
  }
  let numero = lista[0];
  let lista2 = [];
  for (let i = 1; i - 1 < lista.length; i++) {
    numero += 1;
    if (numero !== lista[i]) {
      while (numero < lista[i]) {
        lista2.push(numero);
        numero += 1;
      }
    } 
  }
  return lista2;
}

let listaP123 = [3, 17, -1, 4, -19];
let numeroP2 = 2;
let numeroP22 = 4;
let listaP4 = [7, 2, 4, 6, 3, 9];

console.log("La salida del punto 1 es: ", findMax(listaP123));
console.log(
  "La salida del primer caso del punto 2 es: ",
  includes(listaP123, 2)
);
console.log(
  "La salida del segundo caso del punto 2 es: ",
  includes(listaP123, 4)
);
console.log("La salida del punto 3 es: ", sum(listaP123));
console.log("La salida del punto 4 es: ", missingNumbers(listaP4));
