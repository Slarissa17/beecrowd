const input = require('fs').readFileSync('stdin', 'utf8');
const valor = input.split("\n");

let salario = parseFloat(valor.shift());

if (salario >= 0 && salario <= 2000){
    console.log("Isento");
} else if (salario >= 2000.01 && salario <=3000){
    calculoIR (salario, 0.08);
} else if (salario >= 3000.01 && salario <= 4500){
    let ir = 1000 * 0.08 + 2 * 0.18
    console.log("R$ "+ir)
}else{
    calculoIR(salario, 0.28)
}

function calculoIR (salario, porcentagem){
    let total = salario * porcentagem;
    console.log("R$ "+total);
   
}