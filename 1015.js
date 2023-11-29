var input = require('fs').readFileSync('stdin', 'utf8');
var conteudo = input.split("\n");

var P1 = conteudo.shift().split(" ");
var P2 = conteudo.shift().split(" ");

var x1 = parseFloat(P1.shift());
var y1 = parseFloat(P1.shift());
var x2 = parseFloat(P2.shift());
var y2 = parseFloat(P2.shift());

var distancia = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y1-y2,2));
console.log(distancia.toFixed(4));