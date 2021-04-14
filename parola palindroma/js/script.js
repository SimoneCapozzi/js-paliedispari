 // chiedo di inserire una parola

var parola = prompt("inserisci una parola");



/* funzione

function miaFunzione(){
  console.log();
}
miaFunzione();

*/


var parolaInversa = parolaPalindroma(parola);

if(parola == parolaInversa){
    document.getElementById("par").innerHTML = parolaInversa + " la parola è palindroma" ;
  } else {
    document.getElementById("par").innerHTML = parola + " la parola non è palindroma" ;
}

function parolaPalindroma(str){
  var parolaInversa = '';

  var i = str.length - 1;

  while (i >= 0) {
    parolaInversa += str[i];
    i--;
  }

  return parolaInversa;
}