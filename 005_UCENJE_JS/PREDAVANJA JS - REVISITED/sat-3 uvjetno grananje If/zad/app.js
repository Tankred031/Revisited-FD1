
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML='';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
  const d = document.getElementById('d').value;
  const zadatak = document.getElementById('zadatak').value;

  // Za svaki zadatak zahtjevamo određene ulaze

  if (zadatak === '1'){
    //console.log('1. zadatak');
    //console.log(a);
    

    const x = Number(a);
    if(!x){
      rezultat.innerHTML = ("A nije broj");
      return;   
    }

    const y = Number(b);
    if(!y){
      rezultat.innerHTML = ("B nije broj")
    }


    /*
    if(a > b){
      rezultat.innerHTML = a;
      } else{
      rezultat.innerHTML = b;
      }    
    return;
    }
    */


  if(x > y){
    rezultat.innerHTML = x;
  } else if(x < y){
    rezultat.innerHTML = y;
  } else {
    rezultat.innerHTML = "A i B su jednaki"
  }
  return;
  }




  if (zadatak === '2'){

    const x = Number(a);
    if(isNaN(x)){
      rezultat.innerHTML = "A nije broj";
      return;   
    }

    const y = Number(b);
    if(isNaN(y)){
      rezultat.innerHTML = "B nije broj";
      return;
    }

    const z = Number(c);
    if(isNaN(z)){
      rezultat.innerHTML = "C nije broj"
    }

    if(x === y && y === z){
      rezultat.innerHTML = "Brojevi su jednaki"
    } else if(x <= y && x <= z){
      rezultat.innerHTML = x
    } else if(y <= x && y <= z){
      rezultat.innerHTML = y
    } else {
      rezultat.innerHTML = z
    }
    

    return
  }


  if (zadatak === '3'){

    const x = Number(a);
    const y = Number(b);
    const z = Number(c);
    const q = Number(d);

    if(isNaN(x)){
      rezultat.innerHTML = "A nije broj!"
    }
    if(isNaN(y)){
      rezultat.innerHTML = "B nije broj!"
    }
    if(isNaN(z)){
      rezultat.innerHTML = "C nije broj!"
    }
    if(isNaN(q)){
      rezultat.innerHTML = "D nije broj!"
    }

    rezultat.innerHTML = x + y + z + q;

     return
  }

  if(zadatak==='4'){
    
    const godinaRodenja = Number(a)
    if(isNaN(a)){
      rezultat.innerHTML = "Unesi godinu u polje A"
      return;
    }

    const danas = new Date().getFullYear();
  //  rezultat.innerHTML = "Tvoja starost je: " + (danas-godinaRodenja);
  //  return;
  //  }


    if((danas-godinaRodenja)>=18){
      rezultat.innerHTML = "Osoba je punoljetna"
    } else {
      rezultat.innerHTML = "Osoba je maloljetna"
    } return;
  }


  // 4. zadatak
  //    Provjera punoljetnosti: 
  //  Korisnik unosi godinu rođenja u polje A. 
  //  Izračunaj njegovu dob u odnosu na tekuću godinu i ispiši je li punoljetan ili nije.

/*
  [ZADATAK 5]
 Pozitivan, negativan ili nula: 
 Za uneseni broj u polju A ispiši poruku je li on pozitivan, negativan ili je nula.

 ----------------------------------------------------------------
 
 [ZADATAK 6]
 Parnost broja: 
 Provjeri je li uneseni broj u polju A paran ili neparan koristeći modulo operator (%).

 ----------------------------------------------------------------
 
 [ZADATAK 7]
 Ocjenjivanje: 
 Na temelju unesenog broja bodova (0-100) u polje A, ispiši ocjenu:
 90-100: Odličan, 80-89: Vrlo dobar, 70-79: Dobar, 60-69: Dovoljan, <60: Nedovoljan.

 ----------------------------------------------------------------
 
 [ZADATAK 8]
 Djeljivost: 
 Provjeri je li broj u polju A djeljiv s brojem u polju B bez ostatka. 
 Ispiši "Djeljiv je" ili "Nije djeljiv".  
  */



   

  
  // ovo će se ispisati ako u HTML dodatke option za zadatak a ovdje ga ne obradite
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});



