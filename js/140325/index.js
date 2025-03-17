/*
Esercizio: Chiamata API con fetch e gestione degli errori
Scrivi una funzione getUser(id) che effettua una richiesta GET all'API https://jsonplaceholder.typicode.com/users/1
per ottenere i dati di un utente e gestisce eventuali errori.
*/

async function getUser(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Forma 1
getUser(2)
  .then((userData) => console.log("risposta promise classica", userData))
  .catch((error) => console.error(error));

// oppure Forma 2
async function login() {
  try {
    const userData = await getUser(3);
    console.log("risposta async", userData);
  } catch (error) {
    console.error(error);
  }
}
login();
