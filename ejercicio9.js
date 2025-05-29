// Pide una contraseña y muestra si tiene al menos 8 caracteres.
//input:     "abc123"
//output:    "¿Contraseña válida (8+ caracteres)? false"

let passw = prompt("Escribe una contraseña que tenga al menos 8 caracteres:");

let CantidadCaracteres = passw.length;
console.log("Cantidad de caracteres de la contraseña", CantidadCaracteres);

if (CantidadCaracteres >= 8) {
    console.log("La contraseña es válida.");
} else {
    alert("La contraseña debe tener al menos 8 caracteres.");
}


