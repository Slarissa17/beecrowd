var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split("\n");

var nome = valores.shift();
var salarioFixo = parseFloat(valores.shift());
var totalVendas = parseFloat(valores.shift());
var salarioComissao = salarioFixo + (totalVendas * 0.15);
console.log("TOTAL = R$ " + salarioComissao.toFixed(2));