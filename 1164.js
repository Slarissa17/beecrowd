const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split("\n").map(Number); 

let N = lines.shift(); // numero de casos testes


for(let i = 0; i <N; i++){   // entra no loop ate i ser igual a N (qt de casos testes)
    let X = lines.shift();  // defino minha variavel 
    let cont = 0;           // qt de divisores

    for (let l = 0; l < X; l++){ 
        
        if (X%l === 0){
            cont+=l
        }  
    }
    if (cont === X){
        console.log(`${X} eh perfeito`)
    }else{
        console.log(`${X} nao eh perfeito`)
    }
}