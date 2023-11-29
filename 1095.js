i = 1;
j = 60;
contador = 0;

console.log(`I=1 J=60`)

for (let cont = 0; j > 0 && i >= 1; cont++){
        let sub = j-=5;
        let sum = i+=3
        console.log(`I=${sum} J=${sub}`)
}