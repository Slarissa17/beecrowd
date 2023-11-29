var input = require('fs').readFileSync('stdin', 'utf8');
var linhas = input.split("\n"); //armazena o valor de cada linha e separa quando encontra uma quebra de linha

var linha1 = linhas.shift().split(" ");//armazena o valor de todas as linhas e separa em vetores diferentes quando encontra um espaço
var linha2 = linhas.shift().split(" ");

var idPeca1 = linha1.shift();
var numeroPeca1 = linha1.shift();
var valorUnitarioPeca1 = linha1.shift();

var idPeca2 = linha2.shift();
var numeroPeca2 = linha2.shift();
var valorUnitarioPeca2 = linha2.shift();

var total = (numeroPeca1*valorUnitarioPeca1) + (numeroPeca2*valorUnitarioPeca2)
console.log("VALOR A PAGAR: R$ "+total.toFixed(2));