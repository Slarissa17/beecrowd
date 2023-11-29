const input = require('fs').readFileSync('stdin', 'utf8');
const valor = input.split("\n");
let mes = parseInt(valor.shift());
let i = 0;

const Meses = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

while (Meses[i] != Meses[mes-1]){
    i +=1;
}
console.log(Meses[i]);
