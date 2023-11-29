var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split(" ");

var A = parseFloat(valor.shift());
var B = parseFloat(valor.shift());
var C = parseFloat(valor.shift());

if (A + B > C && B + C > A && C + A > B){
    var perimetro = A + B + C;
    console.log("Perimetro = " + perimetro.toFixed(1));
}else{
    area = (A + B)*C/ 2;
    console.log("Area = "+ area.toFixed(1));
}


