console.log( 'js ok')
/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

const word1=prompt('Inserisci una parola', 'Biscotto');
console.log(word1);

//creo funzione per invertire la parola
function reverseWord(word){
    let reversedWord;
    for(let w = word.length - 1; w >= 0; w--){
        reversedWord += word.charAt(w)
    }
    
    return reversedWord;
}

const word2=reverseWord(word1);
console.log(word2)
