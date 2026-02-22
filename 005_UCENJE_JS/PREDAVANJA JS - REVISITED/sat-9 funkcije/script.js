// funkcija je skup naredbi s određenom svrhom

// osnovne vrste funkcija

// 1 ne prima vrijednost, ne vraća vrijednost

function pozdraviSvijet(){                           // definiranje f
    console.log('Hello World');
    
}
pozdraviSvijet();                                    // pozivanje f


// 2 prima parametre, ne vraća vrijednost

function parniBrojevi(odBroja, doBroja){             // definiranje f,  ova ima parametre
    const max = odBroja>doBroja ? odBroja : doBroja;
    const min = odBroja<doBroja ? odBroja : doBroja;    
    for(let i=min; i<max; i++){
        if(i%2 === 0){
            console.log(i);
            
        }
    }
}

log('Prvi poziv')
parniBrojevi(3,8);
log('Drugi poziv')                                  // pozivanje f
parniBrojevi(59,65);
log('Treći poziv')
parniBrojevi(12,7);


function log(poruka){
    console.log('----------------------');
    console.log(poruka);
    console.log('----------------------');

}

// 3 ne prima paramentre, vraća vrijednost

function slucajniBroj(){                          // definiranje f
    const broj = Math.random();
    log(broj);
    return broj * 1000;                           // ovo vraća vrijednost
}
slucajniBroj();
 
const sb = slucajniBroj()                         // pozivanje f
log(sb);

console.log((Math.random()*1000).toFixed(0));
console.log((Math.random()*(58-22) + 22).toFixed(0))

// 4 prima parametre, vraća vrijednost

function zbrojPrimBrojeva(odBroja, doBroja){
    let suma = 0, prim = true;
    for(let i=odBroja; i<=doBroja; i++){
        prim=true;
        for(let j=2; j<i; j++){
            if(i % j === 0){
                prim=false;
                break;
            }
        }
        if(prim){
            suma += i;
        }    
    }
        return suma;
}   

log(zbrojPrimBrojeva(3,80));


// 5 arrow funkcija

const pozdravArrow = () => console.log('Hello Arrow');
pozdravArrow();




// 6 funkcija u objektu


const brojevi = {
    slucajniBroj: () => {
        return 7;
    },
   nula: () => {return 0}
}

log(brojevi['slucajniBroj']());
