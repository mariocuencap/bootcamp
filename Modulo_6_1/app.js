// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

const productList = document.createElement("ul");
for (let i = 0; i < products.length; i++) {
  const product = products[i];
  const listItem = document.createElement("li");
  const description = document.createElement("span");
  description.textContent = product.description;
  const price = document.createElement("span");
  price.textContent = `${product.price}€/ud.`;
  const units = document.createElement("input");
  units.type = "number";
  units.value = product.units;
  units.addEventListener("change", (event) => {
    product.units = parseInt(event.target.value);
  });

  listItem.appendChild(description);
  listItem.appendChild(price);
  listItem.appendChild(units);

  productList.appendChild(listItem);
}


const productsContainer = document.getElementById("products");
productsContainer.appendChild(productList);


const calculateButton = document.querySelector("button");
const subtotalField = document.getElementById("subtotal");
const ivaField = document.getElementById("iva");
const totalField = document.getElementById("total");

function calculate() {
  let subtotal = 0;
  let iva = 0;
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    subtotal += product.price * product.units;
    iva += (product.price * product.units * product.tax) / 100;
  }

  total = subtotal + iva;

  subtotalField.textContent = `Subtotal: ${subtotal.toFixed(2)} €`;
  ivaField.textContent = `IVA: ${iva.toFixed(2)} €`;
  totalField.textContent = `TOTAL: ${total.toFixed(2)} €`;
}

calculateButton.addEventListener("click", calculate);
