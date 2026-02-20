// uvjetno grananje if


// if radi s boolean tipom podatka
const uvjet = true;

// osnovna if sintaksa treba samo if granu
if(uvjet){
    console.log("Uvjet je true");        
}


// pošto if radi s boolean imamo i drugu granu -- ulazimo u nju ako je vrijednost false
else {
    console.log("Uvjet je false");    
}


// ako ne postoji {} tada se uvjet odnosti samo na prvu iduću liniju
if(uvjet)
    console.log ('Bez {} true');
else
    console.log('Bez {} flase');
    console.log('Ovo se treba izvesti ako je false');  // nije dio else i uvijek se ispisuje
    

// if naredba ima i else if dio
// bolja zamjena za else if je switch

const ocjena = 3;

if(ocjena === 1){
    console.log("Nedovoljan");    
} else if(ocjena === 2){
    console.log("Dovoljan");    
} else if(ocjena ===3){
    console.log("Dobar");    
} else {
    console.log("Ocjena nije 1, 2 ili 3");    
}


// ugnježđeni if
if(uvjet){
    if(ocjena>1){
        console.log("Oba uvjeta su zadovoljena");
    }
}
    

// ovo može i kraće
if(uvjet && ocjena >1){
    console.log("Kraći način zadovoljavanja oba uvjeta");    
}


// tercijarni operator ?: je inline if else, tu se i najviše koristi
if(ocjena >= 2){
    console.log("Pozitivna");    
} else{
    console.log("Negativna");    
}

console.log(ocjena > 2 ? "Pozitivna" : "Negativna");


// falsy vrijednosti
const ime = "Pero";     // ako je vrijednost prazna, vrijednost je false

if(ime){
    console.log("Ime je postavljeno");    
}

const b = 0;
let objekt = null;
let nedefinirano;

const broj = Number('aaa');
console.log(broj);           // NaN - Not a Number, to je isto false


