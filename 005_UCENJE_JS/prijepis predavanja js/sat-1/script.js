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

// 3 var - redeklaracijska varijabla

var i = 7;
console.log(typeof i, i);
i='7';
console.log(typeof i, i);
var i = true;
console.log(typeof i, i);