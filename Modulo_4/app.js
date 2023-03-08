function doSuma() {
  var a = document.getElementById("operando1").value;
  var b = document.getElementById("operando2").value;
  a = parseInt(a, 10);
  b = parseInt(b, 10);
  console.log("El valor del primer número es " + a);
  console.log("El valor del segundo número es " + b);
  if (isNaN(a) || isNaN(b)) {
    document.getElementById("resultado").innerText = "Debes introducir los dos números" ;
    return;
  }
  var result = a + b;
  console.log("El valor de la suma es", result);
  document.getElementById("resultado").innerText =
    "El resultado de la operación es " + result;
}

function doResta() {
  var a = document.getElementById("operando1").value;
  var b = document.getElementById("operando2").value;
  a = parseInt(a, 10);
  b = parseInt(b, 10);
  console.log("El valor del primer número es " + a);
  console.log("El valor del segundo número es " + b);
  if (isNaN(a) || isNaN(b)) {
    document.getElementById("resultado").innerText = "Debes introducir los dos números" ;
    return;
  }
  var result = a - b;
  console.log("El valor de la resta es", result);
  document.getElementById("resultado").innerText =
    "El resultado de la operación es " + result;
}

function doMulti() {
  var a = document.getElementById("operando1").value;
  var b = document.getElementById("operando2").value;
  a = parseInt(a, 10);
  b = parseInt(b, 10);
  console.log("El valor del primer número es " + a);
  console.log("El valor del segundo número es " + b);
  if (isNaN(a) || isNaN(b)) {
    document.getElementById("resultado").innerText = "Debes introducir los dos números" ;
    return;
  }
  var result = a * b;
  console.log("El valor de la multiplicación es", result);
  document.getElementById("resultado").innerText =
    "El resultado de la operación es " + result;
}

function doDivision() {
  var a = document.getElementById("operando1").value;
  var b = document.getElementById("operando2").value;
  a = parseInt(a, 10);
  b = parseInt(b, 10);
  console.log("El valor del primer número es " + a);
  console.log("El valor del segundo número es " + b);
  if (isNaN(a) || isNaN(b)) {
    document.getElementById("resultado").innerText = "Debes introducir los dos números" ;
    return;
  }
  var result = a / b;
  console.log("El valor de la división es", result);
  document.getElementById("resultado").innerText =
    "El resultado de la operación es " + result;
}

document.getElementById("suma").addEventListener("click", doSuma);
document.getElementById("resta").addEventListener("click", doResta);
document.getElementById("multiplicacion").addEventListener("click", doMulti);
document.getElementById("division").addEventListener("click", doDivision);
