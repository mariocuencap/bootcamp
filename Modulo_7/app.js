// VALIDAR UN IBAN

// Caso 1
// ES6600190020961234567890

/*
const pattern = /^[A-Z]{2}\d{22}$/;
const values = ["ES6600190020961234567890"];
values.forEach(value => {
console.log('Regexp matchs with ' + value + '? -> ', pattern.test(value));
});
*/

// Caso 2
// ES66 0019 0020 9612 3456 7890

/*
const pattern = /^[A-Z]{2}\d{2}(\s*\d{4}){5}$/;
const values = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];
values.forEach(value => {
console.log('Regexp matchs with ' + value + '? -> ', pattern.test(value));
});
*/

// Caso 3

/*
const pattern = /^([A-Z]{2})\d{2}(\s*\d{4}){2}\s*(\d{2})\d{2}(\s*\d{4}){2}$/;
const values = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];
values.forEach(value => {
console.log("El código del país del IBAN", value, "es", pattern.exec(value)[1]);
console.log("El dígito de control del IBAN", value, "es", pattern.exec(value)[3]);
});
*/

// VALIDAR MATRÍCULA COCHE

// Caso 1

/*
const pattern = /^\d{4}(\s|-)?[A-Z]{3}$/;
const values = ["2021 GMD", "2345-GMD","4532BDB","0320-AAA"];
values.forEach((value) => {
  console.log("Regexp matchs with " + value + "? -> ", pattern.test(value));
});
*/

// Caso 2

const pattern = /^(\d{4})(\s|-)?([A-Z]{3})$/;
const values = ["2021 GMD", "2345-GMD","4532BDB","0320-AAA"];
values.forEach(value => {
console.log("La parte numérica de la matrícula", value, "es", pattern.exec(value)[1]);
console.log("Las letras de la matrícula", value, "son", pattern.exec(value)[3]);
});