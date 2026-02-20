
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const zadatak = document.getElementById('zadatak').value;

  switch (zadatak) {
    case '1':
      // rješavanje 1. zadatak

      // kraj rješavanje 1. zadatak
    break;
    case '2':
      // rješavanje 2. zadatak

      // kraj rješavanje 2. zadatak
    break;
    case '3':
      // rješavanje 3. zadatak

      // kraj rješavanje 3. zadatak
    break;

    case '4':

      const x = parseFloat(a);
      if(!x){
        rezultat.innerHTML = 'Niste unijeli dobru vrijednost'
        return;
      } 
      const cijeliBroj = parseInt(a);
      rezultat.innerHTML = (x-cijeliBroj) * 100;

      break;

    case '5':

    switch(a.toLowerCase()){
      case 'jabuka':
      case 'kruška':
      case 'banana':  
        rezultat.innerHTML='To je voće';
        break;
      
      default:
        rezultat.innerHTML='Nisam siguran da li je to voće'
    }

    
    case '6':
      rezultat.innerHTML = a.length;

    break;

    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
  }

});




