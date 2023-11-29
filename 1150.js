var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);

let X = lines.shift();
let Z = lines.shift();
let cont = 1;

for (let i = 0; Z<=X; i++){
    Z = lines.shift();
}

for (let l = X; X <= Z; l++){
    X += l;
   cont ++
}
console.log(cont)


