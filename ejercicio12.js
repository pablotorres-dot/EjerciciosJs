// Pedir al usuario su edad
let edad = parseInt(prompt("Ingresá tu edad:"));

// Verificar si puede votar y está dentro del rango válido
let puedeVotar = edad >= 18 && edad <= 100;

// Mostrar el resultado
console.log("¿Puede votar y está dentro del rango válido? " + puedeVotar);