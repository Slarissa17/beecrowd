var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split("\n");

var tempo = parseInt(valor.shift());
var tempoHora = Math.trunc(tempo/3600); 
tempo = tempo % 3600;
var tempoMinuto = Math.trunc(tempo/60);
tempo = tempo % 60;
var tempoSegundo = Math.trunc(tempo);
console.log(`${tempoHora} : ${tempoMinuto} : ${tempoSegundo}`);