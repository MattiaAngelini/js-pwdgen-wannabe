// Chiediamo all'utente il suo nome, cognome, colore preferito e scriviamo in pagina nomecognomecolorepreferito23
 

// Ci serve: nome dell'utente
const userName = prompt('Ciao dimmi il tuo nome');

// Ci serve: cognome dell'utente
const userSurname = prompt('Ciao dimmi il tuo cognome');

// Ci serve: il colore preferito dell'utente
const userPreferitColor = prompt('Ciao dimmi il tuo colore preferito');

// Scriviamo nome cognome colore preferito e 23 nel documento.
document.getElementById('IntroMessage').innerHTML = userName + userSurname + userPreferitColor + 23;