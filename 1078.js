const input = require('fs').readFileSync('stdin', 'utf8');
const valor = input.split("\n");

let N = parseInt(valor.shift());
let mult;

for (let i = 1; i <= 10; i++){
    mult = N * i;
    console.log(`${i} x ${N} = ${mult}`)
}