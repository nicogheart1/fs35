/*function somma(a, b) {
  return a + b;
}
const risultato = somma(1, 2);
console.log("risultato", risultato);*/

async function somma_async(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("devi fornire dei numeri");
  }
  return a + b;
}

somma_async("5", 8)
  .then((risultato) => console.log("risultato async", risultato))
  .catch((error) => console.error("errore qui", error));


const promise1_async = async () => {
  setTimeout(() => {
    return "promise1 completata";
  }, 2000);
};

promise1_async()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
