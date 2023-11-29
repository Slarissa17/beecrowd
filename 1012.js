var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split(" ");

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());

var areaTriangulo = A * C / 2;
var areaCirculo = 3.14159 * Math.pow(C, 2);
var areaTrapezio = ((A + B)*C)/2;
var areaQuadrado = Math.pow(B, 2);
var areaRetangulo = A * B;

var mensagem = `TRIANGULO: ${areaTriangulo.toFixed(3)}\nCIRCULO: ${areaCirculo.toFixed(3)}\nTRAPEZIO: ${areaTrapezio.toFixed(3)}\nQUADRADO: ${areaQuadrado.toFixed(3)}\nRETANGULO: ${areaRetangulo.toFixed(3)}`;
console.log(mensagem);
