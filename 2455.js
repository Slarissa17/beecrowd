var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(" ").map(Number);

let P1 = lines[0];
let C1 = lines[1];
let P2 = lines[2];
let C2 = lines[3];

if (P1* C1 == P2 * C2) {
    console.log(0);
} else if (P1 * C1 > P2 * C2) {
    console.log(-1);
} else {    
    console.log(1);
}