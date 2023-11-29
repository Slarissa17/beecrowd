let input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());


for (let i = 0; i < N; i++){
    let [x, y] = lines.shift().split(" ").map(Number);
    if (x>y){
        [x, y] = [y,x]
    }
    let sumImpar=0;
    for (let cont = x + 1; cont < y; cont++){
        if (cont%2!==0){
            sumImpar+=cont;          
        }
    }
    console.log(sumImpar);

}
