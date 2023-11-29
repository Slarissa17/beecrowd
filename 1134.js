let input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(converteInt);
let alcool= 0, gasolina= 0, diesel = 0;

for (let i =0; i < lines.length; i++){
    switch (lines[i]){
        case 1:
            alcool +=1;
            break;
        case 2:
            gasolina +=1;
            break;
        case 3:
            diesel +=1
            break;
        case 4:
            break;
        
    }
}
console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcool);
console.log("Gasolina: " + gasolina);
console.log("Diesel: " + diesel);

function converteInt (valor){return parseInt(valor)}