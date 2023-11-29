let input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.trim().split("\n"); // removo todos os espaços existentes com a função trim e dps faço a separação do elemento dentro do array a cada espaço

let linha2;
let vgremio = 0;  
let vinter = 0;
let empate = 0;
let grenais = 0;
let x, y, resultado;


do {
    let linha1 = lines.shift().split(" ");
    x = parseInt(linha1.shift());
    y = parseInt(linha1.shift());

    if (x>y){
        vinter++;
        grenais++;
    }else if(x<y){
        vgremio++;
        grenais++
    }else{
        empate++;
        grenais++
    }
    console.log(`Novo grenal (1-sim 2-nao)`);
    linha2 = parseInt(lines.shift());
}while(linha2 === 1){
    if (vinter>vgremio){
        resultado = (`Inter venceu mais`);
    }else if(vgremio>vinter){
        resultado = (`Gremio venceu mais`);
    }else{
        resultado = (`Nao houve vencedor`);
    }
}
console.log(`${grenais} grenais`);
console.log(`Inter:${vinter}`);
console.log(`Gremio:${vgremio}`);
console.log(`Gremio:${vgremio}`);
console.log(`Empates:${empate}`);
console.log(resultado);
