var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split("\n");

var distancia = parseInt(valor.shift());
var calculo = distancia * 60 / 30;
console.log(calculo + " minutos");