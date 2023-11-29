const input = require('fs').readFileSync('stdin', 'utf8');
const valor = input.split("\n");  
const qtTestes = parseInt(valor.shift());




let coelho=0;
let rato = 0;
let sapo = 0; 


for (let i = 0; i < qtTestes; i++){
    let [quantidade, tipo] = valor.shift().trim().split(" ");
    
    if (tipo === "C"){
        coelho += parseInt(quantidade)
    }else if (tipo === "R"){
        rato += parseInt(quantidade)
    }else if (tipo === "S"){
        sapo += parseInt(quantidade)
    } 

}
let soma = coelho + rato + sapo
console.log(`Total: ${soma} cobaias`)
console.log("Total de coelhos: "+ coelho)
console.log("Total de ratos: "+ rato)
console.log("Total de sapos: "+ sapo)
console.log("Percentual de coelhos: " + ((coelho/soma )*100).toFixed(2) +" %")
console.log("Percentual de ratos: " + ((rato/soma )*100).toFixed(2) +" %")
console.log("Percentual de sapos: " + ((sapo/soma )*100).toFixed(2) +" %")





