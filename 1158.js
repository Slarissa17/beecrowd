const input = require('fs').readFileSync('stdin', 'utf8');
const valor = input.split("\n");  
const qtTestes = parseInt(valor.shift()); // pega o primeiro item da lista que define a quatidade de casos testes


for (let i = 0; i < qtTestes; i++){   // laço de repetição, a condição p/ continuar é a qt de casos testes
    let [X, Y] = valor.shift().trim().split(" ").map(Number); // separo as variaveis X e Y

    let sum = 0;
    let contY = 0;
    
    while (contY < Y){
        if (X%2 !== 0 ){
            sum +=X;
            contY++
        }
        X++
    }
    console.log(sum)
}