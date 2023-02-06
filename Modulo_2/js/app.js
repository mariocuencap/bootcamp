/*
var hotel = {
  name: "Marina D'or",
  location: "Oropesa del Mar",
  img: "https://www.marinador.com/sites/default/files/styles/gallery/public/hotel-marina-dor-5-estrellas-slide_0.jpg",
};

// Comprobación de variables

//console.log(hotel.name);
//console.log(hotel.location);
//console.log(hotel.img);

// Nombre, localización e imagen del hotel por JS

document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;

document.getElementById("location-hotel").innerHTML =
  "Ubicado en " + hotel.location;

document.getElementById("img-hotel").src = hotel.img;

// Puntuación del hotel

var punt = prompt("Introduzca una puntuación del 1 al 5");

document.getElementById("rating").innerHTML = punt + " estrellas";

// Reseña anónima o no

var anonimo = confirm("¿Desea que su reseña sea anónima?");

document.getElementById("anonymous").checked = anonimo;

*/


// Opción de elegir hotel

var hoteles = {
  Marina: {
    name: "Marina",
    location: "Oropesa",
    img: "https://www.marinador.com/sites/default/files/styles/gallery/public/hotel-marina-dor-5-estrellas-slide_0.jpg",
  },

  Estelar: {
    name: "Estelar",
    location: "Miraflores",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/2d/e8/70/hotel-estelar-san-isidro.jpg?w=700&h=-1&s=1",
  },
};

var selectedHotel = prompt(
  "Indique el hotel sobre el que quiere hacer la reseña: Marina o Estelar"
);

document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[selectedHotel].name;

document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[selectedHotel].location;

document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

// Opcion de valorar con estrellas

var stars = {
    1:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    2:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    3:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    4:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    5:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
  };

var punt = prompt("Puntuación del 1 al 5");

document.getElementById("rating").innerHTML = stars[punt];