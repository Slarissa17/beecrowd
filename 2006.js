var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");
let cont = 0;

let T = parseInt(lines.shift());
let respostas = (lines[0].split(" ").map(Number));

for (i in respostas){

    if (respostas[i] === T){
        cont++
    }
}
console.log(cont)




