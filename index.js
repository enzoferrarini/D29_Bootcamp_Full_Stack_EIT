const util = require("util");
const fs = require("node:fs");
const process = require("process");

console.log("----------------------------------------");
console.log("------------Desafío N° 29---------------");
console.log("----------------------------------------");

console.log("Directorio de trabajo actual:", process.cwd());

async function readFile() {
  try {
    // Ruta del archivo a leer
    const filePath = "./texto.txt";
    // Leer el archivo de texto de manera asíncrona
    const file = fs.readFileSync("./texto.txt");

    // Muestro contenido de Process
    console.log("------------Contenido de Process---------------");
    console.log(util.inspect(process));

    // Contenido del archivo
    const d = file.toString();
    const data = d.replace(/\r/g, "");

    // Separa el contenido en líneas
    const lineas = data.split("\n");
    console.log("------------Lineas---------------");
    console.log(lineas);

    // Matriz de palabras por lineas
    const matriz = lineas.map((linea) => linea.split(" "));
    console.log("------------Matriz---------------");
    console.log(matriz);

    // Numero de lineas
    const nro_lineas = lineas.length;
    console.log("------------Nro de Lineas---------------");
    console.log(nro_lineas);

    // Numero de palabras
    const nro_palabras = lineas.reduce((accumulator, currentValue) => accumulator + (currentValue.split(" ")).length, 0);
    console.log("------------Nro de Palabras---------------");
    console.log(nro_palabras);

    // Numero de caracteres
    const nro_caracteres = lineas.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0);
    console.log("------------Nro de Caracteres---------------");
    console.log(nro_caracteres);
    console.log("------------FIN-----------------------------");
  } catch (error) {
    console.error("Error al leer el archivo:", error);
  }
}

readFile();