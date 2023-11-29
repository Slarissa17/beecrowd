var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let linha = parseInt(lines.shift());
let operacao = lines.shift();
let matriz = [];

// Preenche a matriz
for (let i = 0; i < 12; i++) {
    let linhaAtual = [];
    for (let j = 0; j < 12; j++) {
        linhaAtual.push(parseFloat(lines.shift()));
    }
    matriz.push(linhaAtual);
}

// Calcula a soma ou a média da linha especificada
let somaOuMedia = 0;
for (let j = 0; j < 12; j++) {
    somaOuMedia += matriz[linha][j];
}

if (operacao === 'M') {
    somaOuMedia /= 12;
}

// Imprime o resultado com 1 casa decimal
console.log(somaOuMedia.toFixed(1));

