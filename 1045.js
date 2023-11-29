var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split(" ");

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());
//Primeiro pegamos os valores de A, B e C
var lados  = [A, B, C]; //armazeno todos esse valores dentro de um array
lados.sort(function(a, b){
    return b-a; // compara A e B, se o resultado dessa subtração for negativo quer dizer que B é maior que A
});
A = lados[0];
B = lados[1];
C = lados[2];


if(A >= (B+C)){
    console.log("NAO FORMA TRIANGULO")
}else if(Math.pow(A,2) == Math.pow(B,2) + Math.pow(C,2)){
    console.log("TRIANGULO RETANGULO")
}else if((Math.pow(A,2)) >(Math.pow(B,2)) + (Math.pow(C,2))){
    console.log("TRIANGULO OBTUSANGULO")
}else if((Math.pow(A,2)) < (Math.pow(B,2)) + (Math.pow(C,2))){
    console.log("TRIANGULO ACUTANGULO")
}

if (A == B && B == C){
    console.log("TRIANGULO EQUILATERO")
}else if(A == B || B == C || C == A){
    console.log("TRIANGULO ISOSCELES");
}

//.sort função que permite o critério de ordenação de um array