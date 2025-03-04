/*
Scrivi una funzione trasformaArray che prende un array di numeri e una funzione di trasformazione (callback).
Deve restituire un nuovo array con i numeri trasformati
*/

function quadrato(num) {
  return num * num;
}

function trasformaArray(arr, callback) {
  // Implementa la logica
  //const result = arr.map(callback);
  return arr.map(callback);
}
const trasformaArray2 = (arr, callback) => arr.map(callback);

console.log(
  trasformaArray([1, 2, 3, 4], quadrato),
  trasformaArray2([1, 2, 3, 4], quadrato),

  trasformaArray([1, 2, 3, 4], (n) => n * n)
);
// Output: [1, 4, 9, 16]
