// petlja - For

// klasična -for- petlja

// for(inicijalni uvjet ; uvjet prekida petlje ; promjena varijable)
// for petlja mora imati jednu varijablu, ona mijenja svoju vrijednost stoga će biti let


for(let i=0; i<10; i++) {
//console.log(i, "Edunova")
//console.log("Edunova", i);
//console.log("Edunova " + i);
console.log("Edunova ");
//return ("Edunova", i);   ne može return prekida petlju
}

console.log ('====================================================');

for(let i=0; i<10; i++) console.log('Edunova');

console.log ('====================================================');

for(let i=0; i<10; i++){
    console.log(`Vrijednost i je ${i}`);
}

console.log ('====================================================');

let suma = 0;
for(let i=0; i<10;i++){
    console.log(`${suma} + ${i+1} = `);
    suma += i+1;
    console.log(suma);
    //debugger;
}
console.log('suma', suma);

console.log ('====================================================');


// petlja se može preskočiti i nasilno prekinuti
for(let i=0; i<10; i++){
    if(i===3){
        continue;                   //preskače
    }
    if(i===7){
        break;                       //prekida
    }
    console.log(i);
    
}   

console.log ('====================================================');

// petlja u petlji

for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
        console.log((i+j) * (j+1) );
    }
}

console.log ('====================================================');


// petlja s nizom

const niz = [2,3,4,5,6,7,9];

for(let i=0; i<niz.length-1; i++){
    console.log(niz[i]);
}


// pojednostavljena sintaksa ali samo za prolazak

for (const broj of niz){
    console.log(broj);
}

console.log ('====================================================');

const ime = 'Janko'; 
for(let i=0; i<ime.length;i++){
    console.log(ime[i]);    
}



console.log ('====================================================');


// beskonačna petlja

let broj = 0;
for(;;){
    console.log(broj++);
    if(broj>50){
        break;
    }    
}


