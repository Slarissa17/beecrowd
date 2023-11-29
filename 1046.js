var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split(" ");

var horaInicial = parseInt(valor.shift());
var horaFinal = parseInt(valor.shift());

if (horaInicial > horaFinal || horaFinal == horaInicial){
    var tempoTotal = Math.abs(horaInicial - 24) + horaFinal;
    console.log("O JOGO DUROU "+ tempoTotal + " HORAS(S)" );
}else if(horaInicial < horaFinal) {
    var tempoTotal = horaFinal - horaInicial;
    console.log("O JOGO DUROU "+ tempoTotal + " HORAS(S)" );
}