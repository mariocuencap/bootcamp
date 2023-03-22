const inputField = document.getElementById("inputField");
const sumaBtn = document.getElementById("sumaBtn");
const restaBtn = document.getElementById("restaBtn");
const multiplicaBtn = document.getElementById("multiplicaBtn");
const divideBtn = document.getElementById("divideBtn");
const resultadoBtn = document.getElementById("resultadoBtn");

let operando1 = 0;
let operacion = "";

function calcular() {
  const operando2 = parseFloat(inputField.value);
  let resultado = 0;
  switch (operacion) {
    case "+":
      resultado = operando1 + operando2;
      break;
    case "-":
      resultado = operando1 - operando2;
      break;
    case "*":
      resultado = operando1 * operando2;
      break;
    case "/":
      resultado = operando1 / operando2;
      break;
  }
  inputField.value = resultado;
  operando1 = resultado;
}

function asignarOperacion(op) {
  operacion = op;
  operando1 = parseFloat(inputField.value);
  inputField.value = "";
}

sumaBtn.addEventListener("click", function() {
  asignarOperacion("+");
});

restaBtn.addEventListener("click", function() {
  asignarOperacion("-");
});

multiplicaBtn.addEventListener("click", function() {
  asignarOperacion("*");
});

divideBtn.addEventListener("click", function() {
  asignarOperacion("/");
});

resultadoBtn.addEventListener("click", function() {
  calcular();
});