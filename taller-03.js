function desglosarString(palabra, tipo) {
  cantidad = 0;
  let vocales = ["a", "e", "i", "o", "u"];
  let consonantes = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  if (tipo === "vocales") {
    for (let i = 0; i < palabra.length; i++) {
      if (vocales.includes(palabra[i])) {
        cantidad += 1;
      }
    }
  } else {
    if (tipo === "consonantes") {
      for (let i = 0; i < palabra.length; i++) {
        if (consonantes.includes(palabra[i])) {
          cantidad += 1;
        }
      }
    }
  }
  return cantidad;
}

function twoSum(lista, entero) {
  let lista2 = [];
  for (let i = 0; i < lista.length - 1; i++) {
    for (let j = i + 1; j < lista.length; j++) {
      if (lista[i] + lista[j] === entero) {
        lista2.push(i);
        lista2.push(j);
      }
    }
  }
  return lista2;
}

function conversionRomana(cifra) {
  numerosRomanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let cifrArabig = 0;
  for (let i = 0; i < cifra.length - 1; i++) {
    if (numerosRomanos[cifra[i]] >= numerosRomanos[cifra[i + 1]]) {
      cifrArabig += numerosRomanos[cifra[i]];
    } else {
      cifrArabig -= numerosRomanos[cifra[i]];
    }
  }
  cifrArabig += numerosRomanos[cifra[cifra.length - 1]];
  return cifrArabig;
}

function descomposicion(string) {
  let diccionario = string.split(",");
  let palabra = diccionario[0];
  let componen = [];
  for (let i = 1; i < diccionario.length; i++) {
    for (let j = 1; j < diccionario.length; j++) {
      if (i !== j) {
        if (diccionario[i] + diccionario[j] === palabra) {
          componen.push(diccionario[i]);
          componen.push(diccionario[j]);
        }
      }
    }
  }
  return componen;
}

let palabra1 = "murcielagos";
let tipo1 = "consonantes";
console.log("La salida del punto 1 es: " + desglosarString(palabra1, tipo1));

let lista2 = [2, 7, 11, 15];
let num2 = 9;
console.log("La salida del punto 2 es: " + twoSum(lista2, num2));

let cifra = "MCMXCVII";
console.log(
  "La salida del punto 3 es: " + conversionRomana(cifra)
);

string4 = "malhumor,al,hum,humor,m,mal,malhu";
console.log("La salida del punto 4 es: " + descomposicion(string4));
