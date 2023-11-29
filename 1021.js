const input = require('fs').readFileSync('stdin', 'utf8');
const valor = input.split("\n");

let numero = parseFloat(valor.shift());

let nota100 = Math.trunc(numero/100);
numero = numero%100;

let nota50 = Math.trunc(numero/50);
numero = numero%50;

let nota20 = Math.trunc(numero/20);
numero = numero % 20;

let nota10 = Math.trunc(numero/10);
numero = numero % 10;

let nota5 = Math.trunc(numero/5);
numero = numero % 5;

let nota2 = Math.trunc(numero/2);
numero = numero % 2;
numero = numero * 100;

let moeda1 = Math.trunc(numero/100);
numero = numero % 100;

let moeda50 = Math.trunc(numero / 50);
numero =  numero % 50;

let moeda25 = Math.trunc(numero / 25);
numero = numero % 25;

let moeda10 = Math.trunc(numero / 10);
numero = numero%10;

let moeda5 = Math.trunc(numero/5);
numero =  numero%5;

let moeda01 =Math.trunc(numero/1);


console.log("NOTAS:")
console.log(nota100 + " nota(s) de R$ 100.00");
console.log(nota50 + " nota(s) de R$ 50.00");
console.log(nota20 + " nota(s) de R$ 20.00");
console.log(nota10 + " nota(s) de R$ 10.00");
console.log(nota5 + " nota(s) de R$ 5.00");
console.log(nota2 + " nota(s) de R$ 2.00");
console.log("MOEDAS:")
console.log(moeda1 + " moeda(s) de R$ 1.00");
console.log(moeda50 + " moeda(s) de R$ 0.50");
console.log(moeda25 + " moeda(s) de R$ 0.25");
console.log(moeda10 + " moeda(s) de R$ 0.10");
console.log(moeda5 + " moeda(s) de R$ 0.05");
console.log(moeda01 + " moeda(s) de R$ 0.01");


