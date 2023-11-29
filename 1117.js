let input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(converteFloat);
let contaNotas = 0;
let media = 0;


for (let i =0; i < lines.length; i++){
    if (lines[i] < 0 || lines[i] > 10){
        console.log("nota invalida")
    }else{
        media += lines[i]/2
        
        contaNotas +=1
        if (contaNotas == 2){
            break
        }
    }
}
console.log("media = "+ media.toFixed(2))

function converteFloat (valor){return parseFloat(valor)}