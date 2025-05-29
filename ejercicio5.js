// Pide una frase que contenga la palabra "malo" y reemplázala por "bueno".
// .replace()

let texto = prompt("Escribe una frase que contenga la palabra malo:");

//paso la frase entera a minuscula para que la encuentre el replace:
texto = texto.toLowerCase();


// para cuando la palabra buscada aparece solo una vez:
let nuevoTexto = texto.replace("malo", "bueno");
console.log("Nuevo texto cuando la palabra malo aparece una sola vez:", nuevoTexto); 


// para cuando la palabra malo aparece mas de una vez:
nuevoTexto = texto.replace(/malo/g, "bueno");
console.log("Nuevo texto cuando la palabra malo aparece mas de una vez:", nuevoTexto);



