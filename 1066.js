const input = require('fs').readFileSync('stdin', 'utf8');
const valor = input.split("\n");


let N = valor;
parseInt(N);
i = 0;
let Positivos = 0;
let negativos = 0;
let par = 0;
let impar = 0;

while (i < 5){

   if (N[i] > 0){
        Positivos++
   }else if (N[i] < 0){
    negativos++
   } 

   if (N[i]%2 === 0){
    par++
   }else{
    impar++
   }
   i++
}
console.log(par + " valor(es) par(es)")
console.log(impar + " valor(es) impar(es)")
console.log(Positivos + " valor(es) positivo(s)")
console.log(negativos + " valor(es) negativo(s)")

