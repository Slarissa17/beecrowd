const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split("\n").map(Number); 

let N = lines.shift();


for(let i = 0; i <N; i++){
    let X = lines.shift();
    let cont = 0;
    for (let l = 0; l <= X; l++){
        
        if (X%l === 0){
            cont++
        }
        
    }
    if(cont === 2){
        console.log(X + " eh primo       "  + cont);
        
    }else{
        console.log(X + " nao eh primo         " + cont);
    }
}