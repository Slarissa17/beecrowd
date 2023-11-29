var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(" ").map(Number);

for(let i = 0; i < 4; i++){
    if(lines[i] === 1){
        console.log(i+1);
    }
}
