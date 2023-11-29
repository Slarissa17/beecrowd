var input = require('fs').readFileSync('stdin', 'utf8');
var lines = parseInt(input);

let output = '';

for (let i = 0; i < lines; i++){
    
    if (i == lines - 1){
        output += `Ho!`;

    } else {
        output += `Ho `;
    
    }
}
console.log(output);