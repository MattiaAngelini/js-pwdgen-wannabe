// Chiediamo all'utente il suo nome, cognome, colore preferito e scriviamo in pagina nomecognomecolorepreferito23

// Ci serve: nome dell'utente
const userName = prompt('Ciao dimmi il tuo nome');

// Ci serve: cognome dell'utente
const userSurname = prompt('Ciao dimmi il tuo cognome');

// Ci serve: il colore preferito dell'utente
const userPreferitColor = prompt('Ciao dimmi il tuo colore preferito');

//Bonus: Chiediamo all'utente il suo nome e la scelta di un numero e scriviamo:
// nomecognomecolorepreferito e sommiamo il numero scelto con 23.

// Ci serve: numero scelto dall'utente
const userNumberString = prompt("Inserisci qui un numero");

// Ci serve: convertire numero scelto dall'utente da stringa a numero
const userNumber = parseInt(userNumberString);

// Ci serve: sommare numero scelto dall'utente con 23
const resultNumber = userNumber + 23;


// OUTPUT COMANDA 1
document.getElementById('userNumberMod').innerHTML = userName + userSurname + userPreferitColor + resultNumber;
// OUTPUT COMANDA 2
document.getElementById('IntroMessage').innerHTML = userName + userSurname + userPreferitColor + 23;

