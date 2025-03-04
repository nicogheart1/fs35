/*
Scrivi una funzione richiediDati che simuli una chiamata a un server con setTimeout.
Dopo 2 secondi, la funzione deve restituire un oggetto con status: "success" e data: "Dati ricevuti".
*/

function richiediDati(callback) {
  // Implementa la logica con setTimeout
  setTimeout(() => {
    callback({ status: "success", data: "Dati ricevuti" });
  }, 2000);
}

richiediDati((risposta) => {
  console.log(risposta);
});
// Dopo 2 secondi: { status: "success", data: "Dati ricevuti" }
