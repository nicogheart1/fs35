async function somma_async(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("devi fornire dei numeri");
    }
    return a + b;
  } catch (error) {
    throw new Error(error);
  }
  return undefined;
}

async function run_somma() {
  try {
    const result = await somma_async(33, 4);
    console.log("il risultato è", result);
  } catch (error) {
    console.error("si è verificato un errore", error);
  }
}
run_somma();
