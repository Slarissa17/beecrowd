var input = require('fs').readFileSync('stdin', 'utf8'); //essa variavel recebe o conteudo do arquivo stdin

var raio = parseFloat(input);
var pi = 3.14159;
var area = (pi *  Math.pow(raio, 2)).toFixed(4);
console.log("A=" + area);