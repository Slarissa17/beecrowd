var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);
let par = []
let impar = []

for (let i = 0; i < 15; i++){
    
    if (lines[i]%2 === 0){
        par.push(lines[i])
        if (par.length === 5){ // SE O VETOR TIVER 5 POSIÇÕES 
            for (let j = 0; j < 5; j++) { // LAÇO DE REPETIÇÃO PARA IMPRIMIR OS 5 VALORES
                console.log(`par[${j}] = ${par[j]}`);
            }
            par.length = 0;
        }
    }else{
        impar.push(lines[i])
        if (impar.length === 5){
            for (let j = 0; j < 5; j++) { // LAÇO DE REPETIÇÃO PARA IMPRIMIR OS 5 VALORES
                console.log(`impar[${j}] = ${impar[j]}`);
            }
            impar.length = 0;
           
        }
        
    }
   
}
for (let i = 0; i < impar.length; i++) { // IMPRIME OS VALORES RESTANTES DO MEU ARRAY
    console.log(`impar[${i}] = ${impar[i]}`);
}

for (let i = 0; i < par.length; i++) {
    console.log(`par[${i}] = ${par[i]}`);
}
