const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let operacao = lines.shift(); // pega a primeira linha 
let soma = 0;

for(let i = 0; i < 12; i++){ // coluna
    for(let j = 0; j < 12; j++ ){ //linha
        let valor = parseFloat(lines.shift())
       if (j < i) soma += valor
    }
}

const resultado = operacao === "S" ? soma : soma / ((144-12) / 2);
console.log(resultado.toFixed(1));