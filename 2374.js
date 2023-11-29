var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n").map(Number);

let N = lines.shift();
let M = lines.shift();
console.log(N-M)