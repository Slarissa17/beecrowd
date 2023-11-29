let input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let linha1, linha2, X , Y;
linha1 = input.split("\n").map(stringInt); // só converte o primeiro número do elemento do array pq o parseInt faz a conversão enquanto encontra strings que podem ser convetidas em números. Quando n encontra para a conversão
linha2 = input.split(" ").map(stringInt);
linha2.shift();


for (let i = 0; linha1.length > i; i++){
    X = linha1[i];
    Y = linha2[i];

    if (X > Y){
        console.log("Decrescente");
    } else if (X < Y){
        console.log("Crescente");
    }else if (X === Y){
        break
    }
    
}

function stringInt(valor){return parseInt(valor)}