var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(" ").map(Number);

let C = lines[0];
let N = lines[1];
console.log(C % N);
