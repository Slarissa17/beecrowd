var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n").map(Number);

let casosTeste = lines[0];
let listaNumeros = lines.slice(1); // pega o array a partir do indice 1
let qtdNumeros = 0;

for (let i = 0; i < casosTeste; i++){
    if(i === 0 || listaNumeros[i] !== listaNumeros[i - 1] ){
        qtdNumeros++;
    }
}
console.log(qtdNumeros);