var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split(" ");

var A = parseFloat(valor.shift());
var B = parseFloat(valor.shift());
var C = parseFloat(valor.shift());


var delta = Math.pow(B, 2) - 4 * A * C;
var x1= (-(B) + Math.sqrt(delta))/( 2 * A);
var x2= (-(B) - Math.sqrt(delta))/ (2 * A);

if (delta < 0 || A == 0){
    console.log("Impossivel calcular")
}else{
    console.log(`R1 = ${x1.toFixed(5)}\nR2 = ${x2.toFixed(5)}`)
}







