var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(" ").map(Number);

V1 = lines[0];
V2 = lines[1];

if (V1 < V2){
    V1 = V2;
}
console.log(V1);