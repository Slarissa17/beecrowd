const input = require('fs').readFileSync('stdin', 'utf8');
const valor = input.split("\n");

let X = parseInt(valor.shift());
let quantidade=0;

while (quantidade < 6){ // quantidade conta quantos numeros são impares
    // consecutivo
    if (X%2 == 1){
        console.log(X)
        quantidade ++
    }
    X ++
}

