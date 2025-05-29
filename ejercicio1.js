// Pide al usuario su nombre completo y muestra cuántos caracteres tiene, sin contar espacios al principio ni al final.
// usar  .trim() y .length


let nombreUsuario = prompt("Ingresa tu nombre completo:");
let cantidadDeLetras;

nombreUsuario = nombreUsuario.trim()
cantidadDeLetras = nombreUsuario.length;

console.log("El nombre es", nombreUsuario);
console.log("La cantidad de caracteres es:", cantidadDeLetras);

// console.log(let nombreUsuario = prompt("Ingresa tu nombre completo:");
// .toUpperCase());
