var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");
let N = [];

for (let i = 0; i < 20; i++){
   N[i] = parseInt(lines[i]); // preencho os 20 valores 
}

for (let i = 0; i < 10; i++){
    let troca = N[i];
    N[i] = N[19 - i]; // 19 porque é a última posição
    N[19-i] = troca;
}

for (let i = 0; i < 20; i++){
    console.log(`N[${i}] = ${N[i]}`);
}