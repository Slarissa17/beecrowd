const input = require('fs').readFileSync('stdin', 'utf8');
const valores = input.split("\n");

const qtCasos = parseFloat(valores.shift());
let media;

 for(let i = 0; i < qtCasos; i++){
    let notas = valores[i].split(" ").map(Number);
    media = (notas[0] * 2 + notas[1] *3 +  notas[2]*5)/10;
    console.log(media.toFixed(1));
    
 }





