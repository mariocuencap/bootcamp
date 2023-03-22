const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
    ];

    /*
// Listar todos los productos

for (producto of carrito){
    imprimir(producto);
}

function imprimir(producto){
    console.log("-------");
    for(attr in producto){
        console.log(attr.toUpperCase() + ": " + producto[attr])
    }
}
*/
// Eliminar el producto con id 54657 del carrito de la compra

// Recorrer el carrito, hacer if id == 54657 { producto.splice(i, 1)}

/*
function eliminarProducto(producto, id) {
  for (i = 0; i < producto.length; i++) {
    if (producto[i].id === id) {
      producto.splice(i, 1);
      break;
    }
  }
}

eliminarProducto(carrito, 54657);

for (producto of carrito){
    imprimir(producto);
}

function imprimir(producto){
    console.log("-------");
    for(attr in producto){
        console.log(attr.toUpperCase() + ": " + producto[attr])
    }
}

*/
/*
// Calcular el total del carrito de la compra

let totalCarrito = 0;

for (let i = 0; i < carrito.length; i++) {
    totalCarrito += carrito[i].price * carrito[i].count;
}

console.log("El total del carrito de la compra es: " + totalCarrito + "€");
*/
/*
// Filtrar por los productos que sean premium

const productosPremium = [];

for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].premium) {
    productosPremium.push(carrito[i]);
  }
}

for (producto of productosPremium){
    imprimir(producto);
}

function imprimir(producto){
    console.log("-------");
    for(attr in producto){
        console.log(attr.toUpperCase() + ": " + producto[attr])
    }
}
*/
/*
// Gastos de envío

function verificarGastosEnvio(producto) {
  for (let i = 0; i < producto.length; i++) {
    if (!producto[i].premium) {
      return "Este pedido tiene gastos de envío";
    }
  }
  return "Pedido sin gastos de envío";
}

console.log(verificarGastosEnvio(carrito));
*/
/*
// Aplicar un descuento del 5% si la compra es mayor de 100 €

let total = 0;
for (i = 0; i < carrito.length; i++) {
  total += carrito[i].price * carrito[i].count;
}

if (total > 100) {
  const descuento = total * 0.05;
  total -= descuento;
  total = total.toFixed();
}

console.log("Total del carrito:", total, "€");
*/