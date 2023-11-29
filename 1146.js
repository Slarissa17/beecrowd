var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split("\n").map(Number);

for (let i = 0; valores[i] !== 0; i++){ // loop em que a condição de parada é quando encontrar 0
    let X = valores[i];
    let output = []
    for(let l = 1; l <= X; l++ ){
        output.push(l.toString());
    }
    console.log(output.join(" "));
    
}