// Pedir al usuario un correo electrónico
let correo = prompt("Ingresá tu correo electrónico:");

// Buscar la posición del @
let posicionArroba = correo.indexOf("@");

// Extraer el nombre de usuario
let nombreUsuario = correo.slice(0, posicionArroba);

// Mostrar el resultado
console.log("Nombre de usuario: " + nombreUsuario);