var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

let qtTestes = parseInt(lines[0]);


for (let i = 1; i <= qtTestes; i++){
    let valores = lines[i].split(" ").map(Number);
    let [PA, PB, G1, G2] = valores;
    let anos = 0;
    while (PA <= PB){
        PA = Math.floor(PA * (1 + G1 / 100));
        PB = Math.floor(PB * (1 + G2 / 100));
        anos++
        if (anos > 100){
            console.log("Mais de 1 seculo.");
            break;
        }
    }
    if (anos<=100){
        console.log(anos + " anos.");
        
    }
}