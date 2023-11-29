const input = require('fs').readFileSync('stdin', 'utf8');
const valor = input.split("\n"); 

let i = 1;
let j = 7;

while (i <= 9){
    console.log(`I=${i} J=${j}`);
    console.log(`I=${i} J=${j-1}`);
    console.log(`I=${i} J=${j-2}`);

    i+=2
    j+=2
}