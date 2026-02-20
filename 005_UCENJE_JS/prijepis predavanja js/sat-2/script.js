// operatori


// aritmetički opreratori
// + - * /

const a = 2, b = 3;

let rez = a+b;           // ovo je algoritam
console.log(rez);

// modulo operator - %

console.log(9%2);   // je 1 , rezultat ima ostatak, 
console.log(10%2);  // je 0 , rezultat je cijeli broj

console.log(1000 % 100 === 0);  // true


// operator dodjele
// =

rez = rez + 2;      // jednako 7 
console.log(rez);
rez += 2;           // istu varijablu ću uvećati i ispisati za 2; onih 5+2 još +2
console.log(rez);
rez -= 5;           // onih 9 sad -5
console.log(rez);

const x = 2;
rez += x;
console.log(rez);   // 4 od gore +2 novih je sad 6


rez += 1;
console.log(rez);   // je 7


// operatori increment i decrement (uvećavanja i smanjivanja)

rez++;               // ovo se piše
console.log(rez);   //             na moderniji način


console.log(rez++);  // ispisi pa izračunaj - to uvećanje stoji u memoriji i čeka ispis 8 (9)
console.log(++rez);  // izračunaj(uvećaj) i ispiši 10

console.log(--rez);  // 9
console.log(rez--);  // 9
console.log(rez);    // 8


// operatori uspoređivanja
// == operator uspoređivanja vrijednosti

console.log( 5 == 5);
console.log( "5" == 5);
console.log( 3 == 7);

// === operator uspoređivanje vrijednosti i tipa

console.log( "Osijek" === "Osijek");
console.log( "5" === 5);
console.log( "Edunova" === "Druga škola");
console.log( "Osijek" === "osije");

// != različito

console.log( 4 != 3);
console.log(( '4' != 4));


// veće od >
// veće jednako od >=

let godine = 18;
console.log(godine > 18);
console.log(godine >= 18);


// manje od <
// manje ili jednako od <=

godine = 21;
console.log(godine < 21);
console.log(godine <= 21);


// logički operatori
// uspoređuju dvije boolean vrijednosti
// AND, OR i NOT -- i, ili, ne

// logički operator AND &&

const i1 = 5 == '5';  // true
const i2 = 7 > 9;     // false


// booleova tablica za and (&&)
// i1       i2      rez (i1 && i2)
// false    false   false
// false    true    false
// true     false   false
// true     true    true

console.log( i1 && i2);    // false


// booleva tablica za or (||)
// i1       i2      rez (i1 || i2)
// false    false   false
// false    true    true
// true     false   true
// true     true    true

console.log( i1 || i2);    // true


// booleova tablica za not (!)
// i1       rez (!i1)
// false    true
// true     false

console.log(!i1);    // false


// ternarni operator --> koristi se u if naredbi
// ? :

const poruka = godine >= 19 ? "Punoljetan" : "Maloljetan";
console.log(poruka);


// spajanje stringova (concaternation) +
const skola = "Edunova";
console.log("Najbolja škola je " + skola);   // ne preporuča se već se ide s backtick-om
console.log(`Najbolja škola je ${skola}`);
const razred = 5;
console.log("idem u " + razred + ". razred.");
console.log(`Idem u ${razred}. razred.`);


// spread operator
// koristi se na nizovima i objektima

const niz = [2,2,3,3]
console.log(niz);
const noviNiz = [1, ...niz, 4];
console.log(noviNiz);


// na objektu
const osoba = {
    ime: "Stipe",
    prezime: "Stipić"
};
console.log(osoba);

const polaznik = {
    ...osoba,
    edukacija: "Frontend"
};
console.log(osoba);


// deconstructing  --> suprotno od spread

const [prvi, drugi] = [1, 2]
console.log(prvi);
console.log(drugi);

// na objektu
const {prezime, ...objektBezPrezimena} = polaznik; 
console.log(objektBezPrezimena);
console.log(prezime);


// nullish coalescing operator (??)
let sifra = null;
console.log(sifra ?? "Šifra nije postavljena");


// optional chaining (?.)
// malo kompleksniji JSON

const korisnik = {
    adresa: {
        grad: "Osijek"
    }
}
console.log(korisnik.adresa.grad);   // ispisuje Osijek
console.log(korisnik.adresa.ulica);  // undefined

console.log(korisnik?.adresa?.ulica);  // undefined


// typoof, instanceof
console.log([3,4,5] instanceof Array);  // true


// in operator
console.log("prezime" in osoba);  // true
console.log("prezime" in objektBezPrezimena);  // false


