var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n").map(Number);

let nota1 = lines[0];
let media = lines[1];

let nota2 = (media * 2) - nota1;
console.log(nota2);