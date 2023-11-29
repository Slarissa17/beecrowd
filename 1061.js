const input = require('fs').readFileSync('stdin', 'utf8');
const valor = input.split("\n"); 

let diaInicial = parseInt(valor.shift().split(" ")[1]);

let tempoInicial =valor.shift().split(" : ");
let horaInicial = parseInt(tempoInicial[0]);
let minutoInicial = parseInt(tempoInicial[1]);
let segundoInicial = parseInt(tempoInicial[2]);

let diaFinal = parseInt(valor.shift().split(" ")[1]);
let tempoFinal = valor.shift().split(" : ");
let horaFinal = parseInt(tempoInicial[0]);
let minutoFinal = parseInt(tempoInicial[1]);
let segundoFinal = parseInt(tempoInicial[2]);

let tempoTotal = (segundoFinal + minutoFinal * 60 + horaFinal *3600) - (segundoFinal + minutoInicial*60 + horaInicial*3600);
