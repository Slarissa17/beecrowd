var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

let casosTeste =parseInt(lines.shift());

for(let i = 1; i <= casosTeste; i++){
    let [R1, R2] = lines.shift().split(" ").map(Number);
   let soma = R1+R2;
   console.log(soma);
}