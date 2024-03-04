// Chiediamo all'utente il suo nome, cognome, colore preferito e scriviamo in pagina nomecognomecolorepreferito23
 

// Ci serve: nome dell'utente
const userName = prompt('Ciao dimmi il tuo nome');
console.log(userName);

// Ci serve: cognome dell'utente
const userSurname = prompt('Ciao dimmi il tuo cognome');
console.log(userSurname);

// Ci serve: il colore preferito dell'utente
const userPreferitColor = prompt('Ciao dimmi il tuo colore preferito');
console.log(userPreferitColor);

// Scriviamo nome cognome colore preferito e 23 nel documento.
document.getElementById('IntroMessage').innerHTML = userName + userSurname + userPreferitColor + 23;