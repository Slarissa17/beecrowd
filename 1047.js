const input = require('fs').readFileSync('stdin', 'utf8');
const valor = input.split(" ");

let horaInicial = parseInt(valor.shift());
let minutoInicial = parseInt(valor.shift());
let horaFinal = parseInt(valor.shift());
let minutoFinal = parseInt(valor.shift());
let tempoHora;
let tempoMinuto;

if (horaFinal > horaInicial || (horaFinal === horaInicial && minutoFinal > minutoInicial)) {
    tempoHora = horaFinal - horaInicial;
    tempoMinuto = minutoFinal - minutoInicial;
} else if (horaFinal === horaInicial && minutoFinal === minutoInicial) {
    tempoHora = 24;
    tempoMinuto = 0;
} else {
    tempoHora = 24 + horaFinal - horaInicial;
    tempoMinuto = minutoFinal - minutoInicial;
}

if (tempoMinuto < 0) {
    tempoHora--;
    tempoMinuto += 60;
}

console.log(`O JOGO DUROU ${tempoHora} HORA(S) E ${tempoMinuto} MINUTO(S)`);