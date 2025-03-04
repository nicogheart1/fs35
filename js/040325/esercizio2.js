/*
Scrivi una funzione filtraNumeri che accetta un array di numeri e una callback per decidere quali numeri mantenere.
*/

function numeriPari(num) {
    return num % 2 === 0; // boolean
}

function numeriDispari(num) {
    return num % 2 !== 0; // boolean
}

function filtraNumeri(arr, callback) {
    // Implementa la logica
    //const result = arr.filter((value) => callback(value));
    const result = arr.filter(callback);
    return result;
}

console.log(
    filtraNumeri([1, 2, 3, 4, 5, 6], numeriPari),
    filtraNumeri([1, 2, 3, 4, 5, 6], numeriDispari)
); 
// Output: [2, 4, 6]
