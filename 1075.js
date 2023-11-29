const input = require('fs').readFileSync('stdin', 'utf8');
const valores = input.split("\n");
let N = parseInt(valores.shift());
let calculo;


for (let i = 1; i >= 1 && i < 10000; i++){
    if (i%N === 2){
        console.log(i);
    }
}