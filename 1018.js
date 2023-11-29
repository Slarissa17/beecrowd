const input = require('fs').readFileSync('stdin', 'utf8');
const valor = input.split("\n");

var numero = parseInt(valor.shift());
console.log(numero);
var nota100 = Math.trunc(numero/100);
numero = numero%100
var nota50 = Math.trunc(numero /50);
numero = numero%50
var nota20 = Math.trunc(numero/20);
numero = numero % 20
var nota10 = Math.trunc(numero /10);
numero = numero%10
var nota5 = Math.trunc(numero /5);
numero = numero%5
var nota2 = Math.trunc(numero /2);
numero = numero%2
var nota1 = Math.trunc(numero);



console.log(nota100 + " nota(s) de R$ 100,00");
console.log(nota50 + " nota(s) de R$ 50,00");
console.log(nota20 + " nota(s) de R$ 20,00");
console.log(nota10 + " nota(s) de R$ 10,00");
console.log(nota5 + " nota(s) de R$ 5,00");
console.log(nota2 + " nota(s) de R$ 2,00");
console.log(nota1 + " nota(s) de R$ 1,00");
