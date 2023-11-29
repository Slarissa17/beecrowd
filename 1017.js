var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split("\n");

var tempo = parseInt(valor.shift());
var velocidadeMedia = parseInt(valor.shift());
var distancia = velocidadeMedia * tempo;
var combustivel = distancia/12;
console.log(combustivel.toFixed(3));