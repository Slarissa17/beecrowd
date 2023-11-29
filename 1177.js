var input = require('fs').readFileSync('stdin', 'utf8');
var lines = parseInt(input);

let N = [];

for (let i = 0; i < 1000; i++){
    N[i] = i % lines;
    console.log(`N[${i}] = ${N[i]}`)
}