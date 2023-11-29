const input = require('fs').readFileSync('stdin', 'utf8');
const valor = input.split("\n");

let N = parseInt(valor.shift());
let i = 0;

while (i < N){
    i +=2
    console.log(`${i}^2 = ${i**2}`);
}