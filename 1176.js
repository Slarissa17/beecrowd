var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);
let T = lines.shift();
let fib = [];
fib[0] = 0;
fib[1] = 1;


for (let i = 2; i <= 60; i++){ // faço o calculo até a posição 60, pra n estourar os 64 bits
        fib[i] = fib[i - 1] + fib[i - 2];
}
for (let i = 0; i < T; i++){ 
    N = parseInt(lines.shift());
    console.log(`Fib(${N}) = ${fib[N]}`)
}


