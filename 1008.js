var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split("\n");

var numeroFuncionario = parseInt(valores.shift())
var horasTrabalhadas = parseFloat(valores.shift());
var valorHora = parseFloat(valores.shift());
var salario = horasTrabalhadas * valorHora;
var mensagem = `NUMBER = ${numeroFuncionario}\nSALARY = U$ ${salario.toFixed(2)}`;
console.log(mensagem);