var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n").map(Number);

for (let i = 1; i <100; i++){
    if (lines[i] <= 10){
        console.log(`A[${i}] = ${lines[i].toFixed(1)}`)
    }
}