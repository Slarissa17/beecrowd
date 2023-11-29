var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(Number);

let A = lines.shift();
let N = lines.shift();
let soma = 0; total = 0;


for (let l = 0; N<=0; l++){
    N = lines.shift();
}

for (let i = 0; i <= N-1; i++){
    soma = A + i;
    total +=soma
    
}
console.log(total)
