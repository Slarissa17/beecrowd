var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n").map(Number);


for(i in lines){
    if (lines[i] <= 0){
        lines[i] = 1
    }
    console.log(`X[${i}] = ${lines[i]}`)
}

