let input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N, n1, n2, n3;
N = lines.shift();
n1 = 1;
n2 = 2;
n3 = 3;

for (let i = 0; i < N; i++){
    console.log(`${n1} ${n2} ${n3} PUM`);
    n1 +=4
    n2 +=4
    n3 +=4
}