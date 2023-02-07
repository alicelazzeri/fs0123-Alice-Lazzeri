/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA

In JavaScript esistono 3 differenti tipi di data types: 

- strings: righe di testo generiche comprese fra apici singoli o doppi, che possono comprendere una sola parola come frasi intere. 
Può includere parole e frasi, ma anche numeri. 

- numbers: includono esclusivamente valori numerici, sia interi (integers) che decimali (floats). A differenza delle stringhe,
i numeri non devono essere racchiusi tra apici singoli o doppi. Nel caso di numeri decimali, al posto della virgola, il decimale è rappresentato dal punto. 

- booleans: un dato booleano può esprimere solo due valori: vero (true) e falso (false). Qualsiasi dato può essere convertito in un valore booleano 
all'interno di apposite funzioni. 

*/

// string
let parola = 'Ciao';
console.log(parola); 

// numbers
let numero = 1;
console.log(numero);

//booleans
let condizione = true;
console.log(condizione);


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const name = 'Alice'; 
// let name = 'Alice';

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// esempio 1
let somma = 12 + 20;
console.log(somma);

//esempio 2
let a = 12;
let b = 20;
console.log(a + b);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let name = 'Lazzeri';
console.log(name); // dimostrazione: D2.js:82 Uncaught SyntaxError: Identifier 'name' has already been declared (at D2.js:82:5) */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA
 */

//esempio 1
let sottrazione = (4 - x);
console.log(sottrazione);

//esempio 2
let c = 4;
console.log(c - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = 'john';
let name2 = 'John';
console.log(name1 === name2);

//extra
console.log(name1 === name2.toLowerCase());