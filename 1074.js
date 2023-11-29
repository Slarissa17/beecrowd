const input = require('fs').readFileSync('stdin', 'utf8');
const valores = input.split("\n");

let N = valores.filter(number => number.trim() !== "").map(Number);
let quantidade = N.length;

for (let i =1; i < quantidade; i++){
    if (N[i]%2 === 0 && N[i] > 0){
        console.log("EVEN POSITIVE")
    }else if (N[i]%2 !== 0 &&  N[i] > 0){
        console.log("ODD POSITIVE")
    }else if (N[i]%2 !== 0 &&  N[i] < 0){
        console.log("ODD NEGATIVE")
    }else if (N[i]%2 === 0 &&  N[i] < 0){
        console.log("EVEN NEGATIVE")
    }else if (N[i] === 0){
        console.log("NULL")
    }
}

