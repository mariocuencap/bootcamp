function calcularCambio(importeTotal, cantidadEntregada) {
  let importeDevolucion = cantidadEntregada - importeTotal;
  let billetes = [200, 100, 50, 20, 10, 5];
  let monedas = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
  let billetesCantidad = [0, 0, 0, 0, 0, 0];
  let monedasCantidad = [0, 0, 0, 0, 0, 0, 0, 0];
  let resultado = "";

  for (let i = 0; i < billetes.length; i++) {
    if (importeDevolucion >= billetes[i]) {
      billetesCantidad[i] = Math.floor(importeDevolucion / billetes[i]);
      importeDevolucion -= billetesCantidad[i] * billetes[i];
    }
  }

  for (let i = 0; i < monedas.length; i++) {
    if (importeDevolucion >= monedas[i]) {
      monedasCantidad[i] = Math.floor(importeDevolucion / monedas[i]);
      importeDevolucion = (
        importeDevolucion -
        monedasCantidad[i] * monedas[i]
      ).toFixed(2);
    }
  }

  for (let i = 0; i < billetes.length; i++) {
    if (billetesCantidad[i] > 0) {
      resultado +=
        billetesCantidad[i] + " billetes de " + billetes[i] + " euros.<br>";
    }
  }

  for (let i = 0; i < monedas.length; i++) {
    if (monedasCantidad[i] > 0) {
      if (monedas[i] >= 1) {
        resultado +=
          monedasCantidad[i] + " moneda(s) de " + monedas[i] + " euro(s).<br>";
      } else {
        resultado +=
          monedasCantidad[i] +
          " moneda(s) de " +
          (monedas[i] * 100).toFixed() +
          " céntimo(s).<br>";
      }
    }
  }

  return resultado;
}

const btnCalcular = document.getElementById("calcular");
const divResultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", () => {
  const importeTotal = parseFloat(
    document.getElementById("importe-total").value
  );
  const cantidadEntregada = parseFloat(
    document.getElementById("cantidad-entregada").value
  );

  if (cantidadEntregada < importeTotal) {
    divResultado.innerHTML =
      "La cantidad entregada no es suficiente para cubrir el importe total.";
    return;
  }

  const resultado = calcularCambio(importeTotal, cantidadEntregada);

  divResultado.innerHTML = resultado;
});
