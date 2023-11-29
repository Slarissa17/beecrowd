var input = require('fs').readFileSync('stdin', 'utf8');
var N = input.split('\n').map(Number);

let i = 0; somaIdade = 0;

while (N[i] > 0){
    somaIdade += N[i]
    i++
}
console.log((somaIdade/i).toFixed(2))
