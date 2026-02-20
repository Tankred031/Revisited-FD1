// varijable - 3 vrste - to je prostor u memoriji
// 1 const - nepromjenjiva varijabla


// tipovi podataka
// a - string (niz znakova - uglavnom tekst)
const ime = "Edunova" //prompt("Unesi svoje ime");
console.log(`Dobar dan ${ime}!`);

console.log(typeof ime, ime);

// b - number (broj)
const unosGodina = "2026" //prompt("unesi godinu");
const godina = Number(unosGodina);

console.log(typeof godina, godina);

// b1 - parseFloat - decimalni broj
const unosDecimalniBroj = "3.14";
const decimalniBroj = parseFloat(unosDecimalniBroj);
console.log(typeof decimalniBroj, decimalniBroj);

// b2 - parseInt - cijeli broj
const cijeliBroj = parseInt("12");
console.log(typeof cijeliBroj, cijeliBroj);

// c - boolean - logička vrijednost
const logickaVrijednost = true;
console.log(typeof logickaVrijednost, logickaVrijednost);

// 2 let - promjenjiva varijabla
let broj = 7;
broj = 9;

console.log(typeof broj, broj);

broj = '9';
console.log(typeof broj, broj);

// 3 var - redeklaracijska varijabla - nekoristi se više

var i = 7;
console.log(typeof i, i);
i='7';
console.log(typeof i, i);
var i = true;
console.log(typeof i, i);

// d - bigint - veliki broj
const velikiCijeliBroj = 45465464565484765n;
console.log(typeof velikiCijeliBroj, velikiCijeliBroj);

// e - undefined - nedefiniran, pa onda definiran s x=6
let x;
console.log(typeof x, x);
x=6;
console.log(typeof x, x);

// f - null - namjerno nema vrijednost, piše objekt ali to nije, to je arhaizam od starih verzija

let y = null;
console.log(typeof y, y);


// g - object - skup nekih podataka, može se ispisati u tablici zbog preglednosti
const osobaObjekt = {
    ime: "Pero",
    godine: 27,
    znaProgramiriti: true
};
console.log(typeof osobaObjekt, osobaObjekt);
console.table(osobaObjekt);

// h - array - niz elemenata - JS ga prepoznaje isto kao object
const brojevi = [1,4,5,3,5,8,2];
console.log(typeof brojevi, brojevi)

// i - nizovi s objektima - 
const podaciBackend = [
    {
        ime: "Pero",
        prezime: "Perić"
    }, 
    {
        ime: "Ana",
        prezime: "Anić"
    }
];
console.table(podaciBackend);

// j1 - funkcija - trandicionalni način

function pozdrav(){
    console.log("Hello iz funkcije");    
}
console.log(typeof pozdrav, pozdrav);

// j2 - funkcija - moderni način

const pozdravi = () => console.log("Hello iz funkcije nove");
console.log(typeof pozdravi, pozdravi);


// k - symbols 

const id1 = Symbol('id');
const id2 = Symbol ('id');

console.log(typeof id1, id1);


