//Pide un precio y un porcentaje de descuento, y muestra el precio final.

let precio = parseInt(prompt("Introduce el precio del producto que deseas comprar"));
let descuento = parseInt(prompt("Introduce el porcentaje de descuento que quieres solicitar -nro entre 1 y 100-"));

let precioFinal = precio * (1-descuento/100);

console.log("Precio con descuento: ", precioFinal);