// nizovi su struktura podataka
// prazan niz:
const niz = [];
console.log(niz, niz.length);


const temperature = [-2,2,10,15,21,26,29,31,28,19,10,4];
console.log(temperature.length);
console.log('siječanj', temperature[0]);
const zadnji = temperature.length-1;
console.log('prosinac', temperature[zadnji]);

// niz može imati bilo koji tip podataka i može se miješati
// ponavljanje tipova podataka (ptp)

const ptp = [
    'Osijek', 
    12,
    {ime: 'Janko'},
    15n,
    [],
    true,
    null,
    undefined,
    Symbol('id')
]
console.log(ptp);

// ovo je jednodimenzionalni niz
// 2D niz je tablica (matrica)
const tablica = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
    console.log(tablica);
    console.log(tablica[1],[2]);

    tablica [2][0 ]= 10;
    console.log(tablica);


// 3D niz je kocka
// 4D niz je Tenzor