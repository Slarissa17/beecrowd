var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);

let N = lines.shift();

for (let i = N-1; i >= 1; i--){
        N*= i
}
console.log(N)