const input = require('fs').readFileSync('stdin', 'utf8');
const valor = input.split("\n"); 
let i = 1;


while (i<=9){
    for (let j of [7, 6, 5]){
        console.log(`I=${i} J=${j}`);
    }
    i+=2
}

