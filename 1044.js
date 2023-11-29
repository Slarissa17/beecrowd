var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split(" ");
var A = parseInt(valor.shift());
var B = parseInt(valor.shift());

if (B%A==0){
    console.log("Sao Multiplos")
}else if (A%B==0){
    console.log("Sao Multiplos")
}else{
    console.log("Nao sao Multiplos")
}