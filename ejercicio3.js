// Objetivo: Usar .includes() y .toLowerCase().
// Pide un texto y verifica si contiene la palabra "javascript", sin importar mayúsculas o minúsculas.

let texto = prompt("Ingresa un texto");
let PalabraClave = 'javascript';

texto = texto.toLowerCase();
console.log("el texto ingresado en minusculas es:", texto);

let resultado = texto.includes(PalabraClave);

console.log(resultado);



