var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');




for(let i = 0; lines[i] != 0; i++)
{
    const T = lines[i].split(" ").map(Number);
    let medida1 = parseInt(T.shift());
    let medida2 =  parseInt(T.shift());
    let percentual =  parseInt(T.shift());

    let area =  medida1  * medida2;
    let totalTerreno = (100 * area) / percentual
    let lado = Math.trunc(Math.sqrt(totalTerreno));
    console.log(lado)
}