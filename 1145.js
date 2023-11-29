const input = require('fs').readFileSync('stdin', 'utf8');
const valor = input.split(" ").map(Number);  

let X = valor.shift();
let Y = valor.shift();
let contador = 1;

for (let i = 1; i <= Y; i++){    // laço de repetição pra somar 1 no i até ele ser igual ao valor de Y
   process.stdout.write(i.toString()); // escreve o valor i como uma string no console. i.toString() converto i em ums string. Fazemos isso pq o process.stdout espera string como argumento. Se passar como um número inteiro o js vai converter em str, mas é uma boa prática converte-lo.
   // A função do stdout é remover a quebra de linha após cada loop, ele então imprimiria os numeros assim: 123456. Esse comportamento permite tratarmos a saída no console da maneira que quiser.
   if (contador < X && i < Y) {
      process.stdout.write(" ");
  } else if (contador === X) {
      console.log();
      contador = 0;
  }

  contador++;
}
