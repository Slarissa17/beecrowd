const input = require('fs').readFileSync('stdin', 'utf8');
const valores = input.trim().split("\n");

let [M, N] = valores.shift().split(" ").map(Number);

while (M > 0 && N > 0) {
    if (M > N) {
        [M, N] = [N, M];
    }

    let resultado = [];
    let soma = 0;

    for (let i = M; i <= N; i++) {
        resultado.push(i);
        soma += i;
    }

    console.log(resultado.join(' ') + " Sum=" + soma);

    
    [M, N] = valores.shift().split(" ").map(Number);
}


