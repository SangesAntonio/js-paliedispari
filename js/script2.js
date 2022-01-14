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
const result=document.getElementById('result')
const winner=document.getElementById('winner')


//funzione pari o dispari
function evenNumb(number){
    return (number % 2 );
    
}
//funzione numeri random
function randomNumb(min, max){
    let rndNumb=Math.floor(Math.random() *(max-min +1) + min)
    return rndNumb;
}

//identifico pari o dispari 
let choose ;
if(evenOdd.value === 1){
    choose = 1;
}else{
    choose = 0
}

//bottone per eseguire 
button.addEventListener('click', function (){
    //creo numero random
    let rndNumber=randomNumb(1,40);
    cpuNumb.innerText = `Il computer ha scelto ${rndNumber}`;

    //calcolo  risultato
    let finalnumb=parseInt(numb.value);
    let sum= rndNumber+finalnumb;
    result.innerText = `Il risultato è ${sum}`;
    console.log(evenNumb(sum))

    //scelgo pari o dispari
    if(choose == evenNumb(sum)){
        winner.innerText='hai vinto'
    }else {
        winner.innerText='hai perso'
        
    }
    //dichiaro il vicnitore

    
})



