/*
Scrivi una funzione eseguiInOrdine che accetta tre callback e le esegue in sequenza,
dove la seconda parte solo dopo che la prima ha terminato e la terza dopo la seconda.
*/

function primoPasso(nextFn) {
  setTimeout(() => {
    console.log("Primo passo");

    nextFn?.();
  });
}
function secondoPasso(nextFn) {
  console.log("Secondo passo");

  nextFn();
}
function terzoPasso() {
  console.log("Terzo passo");
}

function eseguiInOrdine(callback1, callback2, callback3) {
  // Implementa la logica
  callback1(() => {
    callback2(() => {
      callback3();
    });
  });
}

eseguiInOrdine(primoPasso, secondoPasso, terzoPasso);


setTimeout(() => {
    console.log("Operazione 1 completata");
    setTimeout(() => {
        console.log("Operazione 2 completata");
        setTimeout(() => {
            console.log("Operazione 3 completata");
        }, 1000);
    }, 1000);
}, 1000);