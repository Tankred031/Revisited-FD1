
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
    

    const x = Number(a);
    if(!x){
      rezultat.innerHTML = ("A nije broj");
      return;   
    }

    const y = Number(b);
    if(!y){
      rezultat.innerHTML = ("B nije broj")
    }


    
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
  

    if((danas-godinaRodenja)>=18){
      rezultat.innerHTML = "Osoba je punoljetna"
    } else {
      rezultat.innerHTML = "Osoba je maloljetna"
    } return;
  }


  if(zadatak==='5'){
    console.log("Rješavam zadatak 5");
    
    const x = Number(a);
    const y = Number(b);
    const z = Number(c);
    const q = Number(d);

    if(!x || !y || !z || !q){
      rezultat.innerHTML = "Jedno od unosnih polja nije broj";
    }

    if(x >= y && z >= q){
      rezultat.innerHTML = x + z;
    } else if(x >= y && z < q) {
      rezultat.innerHTML = x + q;
    } else if(x < y && z >= q) {
      rezultat.innerHTML = y + z;
    } else if(x < y && z < q){
      rezultat.innerHTML = y + q;
    } else if(x === 0 && y === 0 && q === 0 && z === 0) {
     rezultat.innerHTML = "Rezultat je 0";
    }

    return;
  }    

  if(zadatak==='6'){

    const w = Number(d);
    if(!w || w == 0){
      rezultat.innerHTML = "Upiši broj u polje D (0 ne vrijedi)"
      return;
    }

    rezultat.innerHTML = w * 10;


   

  return;
  }
  
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});



