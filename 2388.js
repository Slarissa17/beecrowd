var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

let casos = parseInt(lines.shift());
let somaDistancia = 0;

for (let i = 0; i < casos; i++){
    let [tempo, velocidadeMedia] =  lines.shift().split(" ");
    let distancia = tempo*velocidadeMedia;
    somaDistancia+=distancia
    
}
console.log(somaDistancia)