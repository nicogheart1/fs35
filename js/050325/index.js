function richiediDati(callback) {
  // Implementa la logica con setTimeout
  setTimeout(() => {
    const response = { status: "error", data: "Dati non ricevuti" };

    if (response.status === "success") {
      callback(null, response);
    } else {
      // TODO manage error
      const error = new Error("Si è verificato un errore");
      callback(error);
    }
  }, 2000);
}

richiediDati((error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
// Dopo 2 secondi: { status: "success", data: "Dati ricevuti" }
