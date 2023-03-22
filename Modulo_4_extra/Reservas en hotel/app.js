function calcularCoste() {
    var habitacion = document.getElementById("habitacion").value;
    var spa = document.getElementById("spa").checked;
    var ocupacion = document.getElementById("ocupacion").value;
    var noches = document.getElementById("noches").valueAsNumber;
    var parking = document.getElementById("parking").valueAsNumber;

    var tarifa = 0;
    switch (habitacion) {
        case "standard":
            tarifa = 100;
            break;
        case "junior-suite":
            tarifa = 120;
            break;
        case "suite":
            tarifa = 150;
            break;
    }
    if (spa) {
        tarifa += 20;
    }
    switch (ocupacion) {
        case "individual":
            tarifa *= 0.75;
            break;
        case "doble":
            break;
        case "triple":
            tarifa *= 1.25;
            break;
    }
    var costeEstancia = tarifa * noches;
    var costeParking = 10 * parking;
    var costeTotal = costeEstancia + costeParking;

    document.getElementById("coste").value = costeTotal + "€";
}