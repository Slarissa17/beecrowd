const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split("\n"); 

let qtTestes = lines.shift();

for (let i = 1; i <= qtTestes; i++){
    console.log(`${i} ${i ** 2} ${i ** 3}`);
    console.log(`${i} ${i ** 2 + 1} ${i ** 3 + 1}`);
}