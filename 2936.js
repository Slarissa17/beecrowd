var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

let curupira = 300 * parseInt(lines.shift());
let boitata = 1500 * parseInt(lines.shift());
let boto = 600 * parseInt(lines.shift());
let mapinguari = 1000 * parseInt(lines.shift());
let iara = 150 * parseInt(lines.shift());
let chica = 225;

total = curupira + boitata + boto + mapinguari + iara + chica;
console.log(total)