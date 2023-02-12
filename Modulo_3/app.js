/*
// Calcular el total de la compra de un producto

const product = { count: 3, price: 12.55, type: "ropa" };

let total;
let descuento;
const libro = 0.04;
const alimentacion = 0.1;
const resto = 0.21;

if (product.count <= 0) {
    total = 0;
} else{
    total = product.count * product.price;
}

console.log("El precio total, sin descuento aplicado es de: " + total + "€");

switch (product.type) {
    case "libro":
        descuento = total * libro;
        break;
    case "alimentacion":
        descuento = total * alimentacion;
        break;
    default:
        descuento = total * resto;
    break;
}

console.log("El producto es de tipo " + product.type);

console.log("El precio final, una vez aplicado el descuento es de: " + (total - descuento) + "€");
*/


/*
// Calcular sueldo neto en nómina

const empleado = {
  bruto: 36500,
  hijos: 2,
  pagas: 12,
};

let retencion = 0;
let sueldoNetoAnual = empleado.bruto;
let retencionAplicada;

if (empleado.hijos > 0) {
  retencion = retencion - 2;
}

if (empleado.bruto < 12000) {
  retencion = 0;
  retencionAplicada = 0;
} else if (empleado.bruto < 24000 || empleado.bruto >= 12000) {
  retencionAplicada = empleado.bruto * ((8 + retencion) / 100);
} else if (empleado.bruto < 34000 || empleado.bruto >= 24000) {
  retencionAplicada = empleado.bruto * ((16 + retencion) / 100);
} else if (empleado.bruto > 34000) {
  retencionAplicada = empleado.bruto * ((30 + retencion) / 100);
}

let sueldoTotal = sueldoNetoAnual - retencionAplicada;

console.log("La retencion aplicada es: " + retencionAplicada + "€");
console.log("El sueldo total anual del trabajador es de: " + sueldoTotal + "€");

if (empleado.pagas == 14) {
  sueldoMensual = sueldoTotal / 14;
} else if (empleado.pagas == 12) {
  sueldoMensual = sueldoTotal / 12;
}

console.log("El sueldo mensual del empleado es de: " + sueldoMensual + "€");
*/