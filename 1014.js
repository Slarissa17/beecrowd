var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split("\n");

var quilometro = parseInt(valores.shift());
var totalCombustivel = parseFloat(valores.shift());
var media = quilometro/totalCombustivel;
console.log( media.toFixed(3)+" km/l");