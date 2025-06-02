// Pedir tres números al usuario
let num1 = parseFloat(prompt("Ingresá el primer número:"));
let num2 = parseFloat(prompt("Ingresá el segundo número:"));
let num3 = parseFloat(prompt("Ingresá el tercer número:"));

// Calcular el menor y el mayor
let menor = Math.min(num1, num2, num3);
let mayor = Math.max(num1, num2, num3);

// Mostrar los resultados
console.log("El menor es: " + menor);
console.log("El mayor es: " + mayor);