var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);

let N = lines.shift();

for (let i = 1; i <= N; i++){
    if (N%i === 0){
        console.log(i)
    }
}