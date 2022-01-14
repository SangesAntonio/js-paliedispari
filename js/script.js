console.log( 'js ok')
/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

//prendo gli elementi dal DOM
const parola=document.getElementById('parola')
const result=document.getElementById('palindroma')
const button=document.getElementById('bottone');


//bottone per eseguire
button.addEventListener('click', function (){

    console.log(parola.value);
    const reversedWord=reverseWord(parola.value);
    console.log(reversedWord);
    let textWord = result;
    textWord.innerText=`la tua parola ${reversedWord} non è palindroma`;
    
    //verifico se la parola è palindroma
    if(reversedWord == parola.value){
        textWord.innerText=`la tua parola ${reversedWord} è palindroma`;

    }


})

//creo funzione per invertire la parola

function reverseWord(word){
    let reversedWord='';
    for(let w = word.length - 1; w >= 0; w--){
        reversedWord += word.charAt(w)
    }
    
    return reversedWord;
}