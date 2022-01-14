console.log('js ok')
/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

//prendo gli elementi input dal DOM

const button=document.getElementById('bottone');
const numb=document.getElementById('numero-scelto')
const evenOdd=document.getElementById('selector')
const cpuNumb=document.getElementById('cpu-numb')
const winner=document.getElementById('winner')


//creo funzione pari o dispari
function evenNumb(number){
    let value=false
    if(number % 2 == 0){
        value=true
    }
    return value
}
//funzione numeri random
function randomNumb(min, max){
    let rndNumb=Math.floor(Math.random() *(max-min +1) + min)
    return rndNumb;
}

//bottone per eseguire 
button.addEventListener('click', function (){
    //creo numero random

    let rndNumber=randomNumb(1,5);
    cpuNumb.innerText = `Il computer ha scelto ${rndNumber}`
    //calcolo  risultato
    let finalnumb=parseInt(numb.value);
    let sum= rndNumber+finalnumb;

    winner.innerText = `Il risultato è ${sum}`
    
})



