// Generar un número aleatorio entre 0 y 10
let numero = Math.random() * 10;

// Mostrar los resultados
console.log("Número original: " + numero.toFixed(3)); // 3 decimales
console.log("Redondeado: " + Math.round(numero));
console.log("Floor: " + Math.floor(numero));
console.log("Ceil: " + Math.ceil(numero));