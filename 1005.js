var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split("\n");

var Nota1 = parseFloat(valores.shift());
var Nota2 = parseFloat(valores.shift());
var peso1 = 3.5;
var peso2 = 7.5;
var somaPeso = peso1 + peso2;
var media = (((Nota1 * peso1) + (Nota2 * peso2)) / somaPeso).toFixed(5);
console.log("MEDIA = " + media);