// Pide tres números y muestra la suma total y el promedio.

let numero1 = parseInt(prompt("Introduce el primer número"));
let numero2 = parseInt(prompt("Introduce el segundo número"));
let numero3 = parseInt(prompt("Introduce el tercer número"));

let suma = numero1 + numero2 + numero3;
let promedio = suma/3;

console.log("Los nros son:", numero1, "  ",numero2,"  ", numero3);

console.log("La suma de los tres nros es = ", suma);
console.log("El promedio de los tres nros es = ", promedio);