var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);

let i = 0;

while (lines[i] !== 0){
    for (let l = 1; l <= lines[i]; l++){
        for (let c = 1; c <= lines[i]; c++){
            let x = i
            if (c < x){
                x = c;
            }
            if (lines[i] - i + 1 < x){
                x = lines[i] - i + 1
            }
            if (lines[i] - c + 1 < x){
                x = lines[i] - c + 1
            }
            console.log(x);
        }
    }
}
