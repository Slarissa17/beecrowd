const input = require('fs').readFileSync('stdin', 'utf8');
const valor = input.split("\n");

let N = valor;
i = 0;
let positivo = 0;

while (i <= 5){
    if (N[i] > 0 && N[i] !== 0){
        positivo++
    }
    i++
}
console.log(positivo + " valores positivos")
