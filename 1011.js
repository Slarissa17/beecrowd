var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split("\n");

var raio = parseFloat(valores.shift());
var pi = 3.14159;
var volume = (4/3) * pi * Math.pow(raio, 3);

console.log("VOLUME = "+volume.toFixed(3));

