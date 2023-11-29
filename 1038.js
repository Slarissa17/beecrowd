var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split(" ");

var idItem = parseInt(valor.shift());
var quantidade = parseInt(valor.shift());

if (idItem == 1){
    calculo(quantidade,4.0);
}else if(idItem == 2){
    calculo(quantidade,4.5);
}else if(idItem == 3){
    calculo(quantidade,5.0);
}else if (idItem == 4){
    calculo(quantidade,2.0);
}else if(idItem == 5){
    calculo(quantidade,1.5);
}


function calculo(quantidade, valor){
    resultado = quantidade*valor;
    console.log("Total: R$ "+ resultado.toFixed(2));
}
