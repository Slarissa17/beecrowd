const input = require('fs').readFileSync('stdin', 'utf8');
const valores = input.split("\n");

let vertInvert = valores.shift();
let tipo = valores.shift();
let alimento = valores.shift();

if (vertInvert == "vertebrado"){
    if (tipo == "mamifero"){
        if (alimento == "onivoro"){
            console.log("homem");
        } else if (alimento == "herbivoro"){
            console.log("vaca");
        }
        // se ele for mamifero
    } else if(tipo == "ave"){
        if (alimento == "carnivoro"){
            console.log("aguia");
        }else if (alimento == "onivoro"){
            console.log("pomba");
        }
    }
    
}else if (vertInvert == "invertebrado"){
    if (tipo == "inseto"){
        if (alimento == "hematofago"){
            console.log("pulga");
        } else if (alimento == "herbivoro"){
            console.log("lagarta");
        }
    }else if (tipo == "anelideo"){
        if (alimento == "hematofago"){
            console.log("sanguessuga")
        } else if (alimento == "onivoro"){
            console.log("minhoca")
        }
    }
}



