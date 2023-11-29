var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split(" ");

var A = parseInt(valor.shift());
var B = parseInt(valor.shift());
var C = parseInt(valor.shift());

var valores = [A, B,C]

valores.sort(function(a,b){
    return a-b
})
var Ac = valores[0];
var Bc= valores[1];
var Cc = valores[2];
console.log(`${Ac}\n${Bc}\n${Cc}\n\n${A}\n${B}\n${C}`);