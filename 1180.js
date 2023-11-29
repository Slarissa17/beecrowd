var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let N = parseInt(lines.shift());
let X = lines[0].split(' ').map(Number);

let menor  = X[0];

for(i = 1; i < N; i++){
    if (X[i] < menor){
        menor = X[i];
    }
}
console.log( "Menor valor: "+ menor);
console.log("Posicao: "+X.indexOf(menor));

