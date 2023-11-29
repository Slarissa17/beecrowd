
var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split("\n");

let idade = parseInt(valor.shift());
let idadeAnos = Math.trunc(idade/365);
idade = idade % 365;
let idadeMeses = Math.trunc(idade/30);
idade = idade % 30;
let idadeDias = Math.trunc(idade);
console.log(`${idadeAnos} ano(s)\n${idadeMeses} mes(es)\n${idade} dia(s)`)
