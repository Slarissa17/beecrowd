var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(" ").map(Number);

let qtdCompetidores = lines[0];
let qtdPapel = lines[1];
let qtdFolhasPorCompetidor = lines[2];

let qtdFolhasNecessarias = qtdCompetidores * qtdFolhasPorCompetidor;

if (qtdFolhasNecessarias <= qtdPapel){
    console.log("S")
} else {
    console.log("N")
}
