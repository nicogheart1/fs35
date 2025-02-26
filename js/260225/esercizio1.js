/*
Scrivi una funzione
che prende un array di numeri come parametro
e restituisce un nuovo array

contenente solo i numeri primi dell'array originale.

Stampa il nuovo array.

## Suggestion ##
Utilizza un ciclo for per iterare nell'array

e un ciclo for nidificato

per verificare se ogni numero è
divisibile per qualunque numero diverso da 1 e se stesso.
*/

const numbers = [23, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 21, 88, 45];

function ottieniNumeriPrimi(numbers) {
  const newArray = [];

  for (let i = 0; i < numbers.length; i++) {
    // numbers[i]

    let numeroPrimo = true;
    for (let j = 2; j <= 5; j++) {
      if (numbers[i] !== j && numbers[i] % j === 0) {
        numeroPrimo = false;
      }
    }

    if (numeroPrimo && numbers[i] !== 1) {
      newArray.push(numbers[i]);
    }
  }

  return newArray;
}

const result = ottieniNumeriPrimi(numbers);
console.log(
  "Il risultato è:",
  result.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  })
);
