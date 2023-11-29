let input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let linha1, linha2, x, y;
linha1 = input.split("\n").map(converteInteiro);
linha2 = input.split(" ").map(converteInteiro);
linha2.shift()

for (let i = 0; i < linha1.length; i++){
    x = linha1[i];
    y = linha2[i];
    if (x > 0 && y > 0){
        console.log("primeiro");
        
    }else if(x < 0 && y > 0){
        console.log("segundo");
    
    }else if(x < 0 && y < 0){
        console.log("terceiro");
    }else if(x > 0 && y < 0){
        console.log("quarto")
    }else if (x==0 || y==0){
        break
    }
    
}


function converteInteiro(numero){return parseInt(numero)}