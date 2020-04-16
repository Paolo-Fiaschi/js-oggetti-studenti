// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// -Stampare a schermo attraverso il for in tutte le proprietà;
// - Creare un array di oggetti di studenti.
// -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// var studente = {
//   "nome": "Mario",
//   "cognome": "Rossi",
//   "eta": "32"
// }
//
// for (var key in studente){
//   console.log(studente[key]);
//   $(".studenti").append('<h1>' + studente[key] + '</h1>');
// }

var studenti = [{
  "nome": "Mario",
  "cognome": "Rossi",
  "eta": "32"
},
{
  "nome": "Gianni",
  "cognome": "Boncini",
  "eta": "20"
},
{
  "nome": "Alessio",
  "cognome": "Bisoli",
  "eta": "35"
}];
console.log(studenti);

for (var key in studenti){
  console.log(studenti[key].nome, studenti[key].cognome);
  $(".studenti").append('<h1>' + studenti[key].nome + " " + studenti[key].cognome + " " + '</h1>');
}

// var nome = prompt("nome");
// var cognome = prompt("cognome");
// var eta = prompt("età");
//
// studenti.push({
//   "nome": nome,
//   "cognome": cognome,
//   "eta": eta
// })
//
// for (var key in studenti){
//   console.log(studenti[key].nome, studenti[key].cognome);
//   $(".studenti").append('<h1>' + studenti[key].nome + " " + studenti[key].cognome + " " + '</h1>');
// }
