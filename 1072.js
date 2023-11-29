const input = require('fs').readFileSync('stdin', 'utf8');
const valor = input.split("\n");

let contagem = 0;
let out = 0;

let N = valor.filter(numero => numero.trim() !== '' && numero >= 0).map(Number);

let QUANTIDADE = N.length;

for (let i = 1; i < QUANTIDADE; i++){
    const X = parseInt(N[i]);
    if (X >=10 && X<=20){ // se o n[0] == 4 for maior igual a 1 e menor igual 
        contagem ++;  
    }else{
        out++
    }
    
}
console.log(`${contagem} in`)
console.log(`${out} out`)

