const input = require('fs').readFileSync('stdin', 'utf8');
const valores = input.split("\n");

const N = parseInt(valores[0]);
const T = valores[1].split(" ").map(Number);


// Encontrar a pessoa i com menor Ti
const menorTi = Math.min(...T);
const resposta = T.indexOf(menorTi) + 1;

// Imprimir a resposta
console.log(resposta);
