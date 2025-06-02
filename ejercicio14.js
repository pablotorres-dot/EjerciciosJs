// Pedir dos números al usuario
let num1 = parseFloat(prompt("Ingresá el primer número:"));
let num2 = parseFloat(prompt("Ingresá el segundo número:"));

// Comparaciones
let esMayor = num1 > num2;
let esMenor = num1 < num2;
let sonIguales = num1 === num2;

// Mostrar los resultados
console.log("¿El primero es mayor? " + esMayor);
console.log("¿El primero es menor? " + esMenor);
console.log("¿Son iguales? " + sonIguales);