//Pide un número y muestra si es par (divisible por 2).
//  entiendo que no puedo usarlo sin usar estructuras de control??

let numero = parseInt(prompt("Introduce un número"));
let resultado = numero % 2;

console.log("Resultado = ", resultado);
let esPar = (resultado == 0);

console.log("El nro es par? ", esPar);

