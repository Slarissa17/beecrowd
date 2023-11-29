var input = require('fs').readFileSync('stdin', 'utf8');
var lines = parseInt(input);
let N = [];
N[0] = lines;
console.log(`N[0] = ${lines}`);

for (let i = 1; i < 10; i++){
   N[i] =  (N[i-1] )*2;
    console.log(`N[${i}] = ${N[i]}`);
}

