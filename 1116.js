let input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());
let divisao;

for (let i = 0; i<N; i++){
    let [x, y] = lines.shift().split(" ").map(Number);
   
    if (y===0){
        console.log("divisao impossivel");
    }else{
        divisao = x/y;
        console.log(divisao.toFixed(1));
    }
}