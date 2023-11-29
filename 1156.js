var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split("\n");

let S = 0; x = 1;

for (let i = 1; i<=39;){
    S+= (i/x)
    x*=2
    i+=2;
    
}
console.log(S.toFixed(2));
