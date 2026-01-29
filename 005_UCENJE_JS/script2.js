const ime = 'Edunova' //prompt('unesi svoje ime')
console.log(`dobar dan ${ime}!`)

console.log(typeof ime, ime)

const unosGodina = '2026' //prompt('Unesi godinu')
const godina = Number(unosGodina)
console.log(typeof godina, godina)

const unosDecimalniBroj = '3.14'
const decimalniBroj = parseFloat (unosDecimalniBroj)
console.log(typeof decimalniBroj, decimalniBroj)

const cijeliBroj = parseInt('12')
console.log(typeof cijeliBroj, cijeliBroj)


const logickaVrijednost = true
console.log(typeof logickaVrijednost, logickaVrijednost)
//logickaVrijednost = false

let broj = 7
broj = 9
console.log(typeof broj, broj)

//let broj = 2  ne može se redeklarirati varijabla s let

broj = '9'
console.log(typeof broj, broj)

var i = 7
console.log(typeof i, i)
i = '7'
console.log(typeof i, i)
var i = true
console.log(typeof i, i)


const velikiCijeliBroj = 4546546546546548465465n
console.log(typeof velikiCijeliBroj, velikiCijeliBroj)

let x
console.log(typeof x, x)
x = 6
console.log(typeof x, x)

let y = null
console.log(typeof y, y)

const osobaObjekt = {
    ime: 'Pero',
    godine: 27,
    znaProgramirati: true
}
console.log(typeof osobaObjekt, osobaObjekt)
console.table(osobaObjekt)

const brojevi = [2,3,1,3]
console.log(typeof brojevi, brojevi)

const podaciBackend = [
    {
        ime: 'Pero',
        prezime: 'Perić'
    },
    {
        ime: 'Ana',
        prezime: 'Majić'
    }
]
console.table(podaciBackend)


function pozdrav(){
    console.log('hello iz funkcije')}
console.log(typeof pozdrav, pozdrav)

const pozdravi = () => console.log('hello iz funkcije nove')
console.log(typeof pozdravi, pozdravi)

//inače var to pregazi, može se redefinirati

var pozdrav = () => console.log('hello iz funkcije nove')
console.log(typeof pozdrav, pozdrav)


const id1 = Symbol('id')
const id2 = Symbol('id')
console.log(typeof id1, id1)

// operator provjere jednakosti
// ==  -> provjera po vrijednosti 
// === -> provjera po tipu i vrijednosti

console.log(id1 == id2)
console.log(id1 === id2)




