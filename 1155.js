const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split("\n"); 

let S = 0;
let div=0;

for (let i = 1; i <= 100; i++){
   div += 1/i
}
S = (div).toFixed(2)
console.log(S)