var input = require('fs').readFileSync('stdin', 'utf8');
var lines = parseFloat(input);
let N = [];
N[0] = lines;
console.log(`N[0] = ${lines.toFixed(4)}`);

for (let i = 1; i < 100; i++){
    N[i] =  (N[i-1] )/2;
    var formatarValor =  N[i].toLocaleString('en-US', { minimumFractionDigits: 4, useGrouping: false }); // essa linha configura os valores da minha lista como uma string de acordo com as configurações passadas
    // 1° parametro: en-US define o idioma pra ser usado na formatação
    // 2° parametro: { minimumFractionDigits: 4, useGrouping: false }, controla como o número vai ser formatado
    //  minimumFractionDigits: 4 - define 4 casas decimais depois do ponto e se n tiver acrescenta com 0
    // useGrouping: desativa a separação de milhares ou qualquer outro separador 
    console.log(`N[${i}] = ${formatarValor.replace(',', '.')}`);
    
}

