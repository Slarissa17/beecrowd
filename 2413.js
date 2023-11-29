var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let N = parseInt(lines.shift());

let link3 = N*4;
console.log(link3);