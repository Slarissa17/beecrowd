const input = require('fs').readFileSync('stdin', 'utf8');
const valor = input.split("\n");

let N = parseInt(valor.shift());
let coluna1;
let coluna2;
let coluna3;

for (let i = 0; i < N; i++){ 
    coluna1 = i+1;
    coluna2 = Math.pow(coluna1, 2)
    coluna3 = Math.pow(coluna1, 3)
    console.log(`${coluna1} ${coluna2} ${coluna3}`);
}