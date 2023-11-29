const input = require('fs').readFileSync('stdin', 'utf8');
const N = parseInt(input);

let fib = [];
fib[0] = 0;
fib[1] = 1;

for (let i = 2; i <= N; i++){
    fib[i] = fib[i - 1] + fib[i - 2];
}

const resultado = fib.slice(0, N).join(' ');  // fib.slice cria uma nova matriz(array) a partir do array fib começa na posição 0 e vai ate o valor de N-1. Ja o join junta tudo em uma string e separa cada elemento com um espaço
console.log(resultado);