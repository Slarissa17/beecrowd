const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let linhas = lines.shift();


for(let i = 0; i < lines.length; i++){
    let reclamacao = parseInt(lines[i])
    if(reclamacao === 0)
    {
        console.log("vai ter copa!");
    }
    else
    {
        console.log("vai ter duas!");
    }
}