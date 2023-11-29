const input = require('fs').readFileSync('stdin', 'utf8');
const valor = input.split("\n");

let salario = parseFloat(valor.shift());
let salarioNovo;
let reajuste;

function calculo (salario, porcentagem){
    salarioNovo = salario*porcentagem + salario
    reajuste =  salarioNovo - salario
    console.log(`Novo salario: ${salarioNovo.toFixed(2)}\nReajuste ganho: ${reajuste.toFixed(2)}\nEm percentual: ${Math.trunc(porcentagem*100)} %`)
}

if (salario > 0 && salario <= 400){
    calculo(salario, 0.15)
}else if (salario > 400.01 && salario <= 800){
    calculo(salario, 0.12)
}else if(salario >= 800.01 && salario <= 1200){
    calculo(salario, 0.1) 
}else if (salario >= 1200.01 && salario <=2000){
    calculo(salario, 0.07) 
}else{
    calculo(salario, 0.04) 
}