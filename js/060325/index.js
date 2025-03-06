const { readFile } = require("fs");







function leggiFile(nomeFile, callback) {
  setTimeout(() => {
    readFile(nomeFile, "utf8", (err, data) => {
      if (err) {
        return callback(new Error(`Il file "${nomeFile}" non esiste`), null);
      }
      callback(null, data);
    });
  }, 1000);
}

leggiFile("test.txt", (err, contenuto) => {
  if (err) {
    console.error("Errore:", err.message);
  } else {
    console.log("Successo:", contenuto);
  }
});
