// Constantes
var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
];

// Datos
var myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true),
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true),
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true),
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true),
  },
];

// Función para generar aleatoriamente la disponibilidad de cada miembro del equipo
var randomAvailability = () => {
  for (var i = 0; i < myTeam.length; i++) {
    for (var j = 0; j < WORK_HOURS.length; j++) {
      myTeam[i].availability[j] = Math.random() < 0.5 ? true : false;
    }
    // Mostramos la disponibilidad de cada miembro
    console.log("Disponibilidad de " + myTeam[i].name);
    for (var k = 0; k < WORK_HOURS.length; k++) {
      console.log(
        WORK_HOURS[k] + ": " + (myTeam[i].availability[k] ? "Si" : "No")
      );
    }
  }
};

randomAvailability();

var primerHuecoDisponible = () => {
  for (var i = 0; i < WORK_HOURS.length; i++) {
    var huecoDisponible = true;
    for (var j = 0; j < myTeam.length; j++) {
      if (!myTeam[j].availability[i]) {
        huecoDisponible = false;
        break;
      }
    }
    if (huecoDisponible) {
      return WORK_HOURS[i];
    }
  }
  return null;
};

//var firstAvailableSlot = primerHuecoDisponible();
if (primerHuecoDisponible()) {
  console.log("Hueco encontrado en el horario " + primerHuecoDisponible());
} else {
  console.log("Lo siento. No hay hueco disponible en el equipo.");
}
