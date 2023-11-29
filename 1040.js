var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split("\n");

var linha1 = valor.shift().split(" ");
var linha2 = parseFloat(valor.shift().split());



var nota1 = parseFloat(linha1.shift());
var nota2 = parseFloat(linha1.shift());
var nota3 = parseFloat(linha1.shift());
var nota4 = parseFloat(linha1.shift());


var media = (((nota1 * 2) + (nota2 * 3) + (nota3 * 4) + (nota4*1)) / 10);

if (media >= 7){
    console.log(`Media: ${media.toFixed(1)}\nAluno aprovado.`)
}else if(media < 5){
    console.log(`Media: ${media.toFixed(1)}\nAluno reprovado.`)
}else if(media >=5 && media<=6.9){
    console.log(`Media: ${media.toFixed(1)}\nAluno em exame.`)
    var notaExame = linha2;
    var novaMedia = ((media + notaExame)/2);
    if (novaMedia >= 5){
        console.log(`Nota do exame: ${linha2.toFixed(1)}\nAluno aprovado.\nMedia final: ${novaMedia.toFixed(1)}`)
    }else{
        console.log(`Nota do exame: ${linha2.toFixed(1)}\nAluno reprovado.\nMedia final: ${novaMedia.toFixed(1)}`)
    }
}