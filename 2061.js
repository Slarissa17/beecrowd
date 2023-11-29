var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");
let [pagInicial, qtdAcoes] = lines.shift().split(" ").map(Number);
let total = 0;

for (let i = 0; i < qtdAcoes; i++){
    let acao = lines.shift();
    if (acao == "fechou"){
       total = pagInicial + 2
    } else if (acao == "clicou") {
        total = pagInicial -1 
    }
}
console.log(total)