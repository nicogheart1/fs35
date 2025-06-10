const readFile = require("node:fs").readFile;
const writeFile = require("node:fs").writeFile;

readFile("./text.json", { encoding: "utf-8" }, (error, fileData) => {
  if (error) {
    console.error("si è verificato un errore nella lettura del file:", error);
    return;
  }

  console.log("il contentuto del file è:", fileData);
});

writeFile(
  "./fileCreato.txt",
  "Questo è il contenuto creato dalla funzione writeFile",
  { encoding: "utf-8" },
  (error, result) => {
    if (error) {
      console.error(
        "si è verificato un errore nella creazione del file:",
        error
      );
      return;
    }

    console.log("file creato con successo!", result);
  }
);
