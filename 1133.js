const input = require('fs').readFileSync('stdin', 'utf8');
const valores = input.split("\n");

let X = parseInt(valores[0]);
let Y = parseInt(valores[1]);



if (Y<X){
    [X,Y] = [Y,X]
}

for (let i = X+1; i < Y; i++){
    if (i%5 === 2 || i%5 === 3){
        console.log(i)
    }
}
