// variabile promp scegli pari o dispari; 

var pari_dispari = prompt("Scegli pari o dispari");
console.log(pari_dispari);

//funzioni

function numeri_random(min, max){
  return Math.floor(Math.random() * ((max + 1) - min)  ) + min;
}

//funzione somma (risultatorandom, numeroinserito da 1 a 5);
function somma (num1,num2){
  var sum = num1 + num2;
  return sum;
}

function pari(x){
  if(x % 2 === 0){
    return true;
  }else{
    return false;
  }
}

//ciclo do while

do{
  var numeri = parseInt(prompt("Scegli un numero da 1 a 5"));
}while( numeri < 1 || numeri > 5);
console.log(numeri);


//variabile risultato random = richiamo la funzione numero random(1 a 5);
var result_random = numeri_random(1,5);
console.log(result_random);

//variabile somma = richiamo funzione somma;
var somma = somma(numeri, result_random);
console.log(somma);

//variabile pari = richiamo funzione pari(somma); 
var pari = pari(somma);


if (pari == true && pari_dispari === "pari"){
  console.log("hai vinto");
}else if(pari == false && pari_dispari === "pari"){
  console.log("hai perso");
}else if(pari == true && pari_dispari === "dispari"){
  console.log("hai perso");
}else if(pari == false && pari_dispari === 'dispari'){
 console.log("hai vinto");
}else{
  console.log("non hai scelto ne pari nè dispari");
}

