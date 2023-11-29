var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split("\n");
let n = 0;
while (n >= 0 && n<100){
   n +=1;
   if (n%2==0){
    console.log(n);
   }
   
}