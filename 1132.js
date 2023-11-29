const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split("\n"); 

let X = parseInt(lines[0]);
let Y = parseInt(lines[1]);
let soma = 0;

if (X>Y){
    [X, Y] = [Y,X];
}
for (let i = X; i <= Y; i++){
    if (i%13 !== 0){
            soma+=i
    }
}


console.log(soma)