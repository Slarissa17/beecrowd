var input = require('fs').readFileSync('stdin', 'utf8');
let colocao = parseInt(input);

if (colocao == 1) {
    console.log('Top 1');
} else if (colocao <= 3) {
    console.log('Top 3');
} else if (colocao <= 5) {  
    console.log('Top 5');
} else if (colocao <= 10) {
    console.log('Top 10');
} else if (colocao <= 25) {
    console.log('Top 25');
} else if (colocao <= 50) {
    console.log('Top 50');
} else {
    console.log('Top 100');
}