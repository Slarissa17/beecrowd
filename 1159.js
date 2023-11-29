const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split("\n").map(Number); 


for(let i = 0; lines[i] !== 0 ; i++){ // define quantas vezes o loop acontece e para quando encontra 0 em lines
    let X = lines[i];    
    let soma = 0;


    for (let l = 0; l < 5; l++){ // os numeros pares que ele encontrou
        if (X%2 === 0){
           soma+=X
        }else{
            soma+= X + 1
        }
        X+=2
    }
    console.log(soma)
    
}
