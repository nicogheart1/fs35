/*
Scrivi una funzione "operazione" che accetta due numeri e una callback.
La funzione deve eseguire l'operazione specificata dalla callback e restituirne il risultato.
*/

function somma(num1, num2) {
    return num1 + num2;
}
function differenza(num1, num2) {
    return num1 - num2;
}

function operazione(a, b, callback) {
    // Implementa la logica
    //return callback(a,b);
    const result = callback(a, b);
    return result;
}

console.log(
    operazione(5, 3, somma),
    operazione(5, 3, differenza),
); // Output: 8, 2
