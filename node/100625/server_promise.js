const readFile = require("node:fs/promises").readFile;
const writeFile = require("node:fs/promises").writeFile;

// readFile("./text.json", { encoding: "utf-8" })
//   .then((fileData) => {
//     console.log("file letto:", fileData);
//   })
//   .catch((error) => {
//     console.error("si è verificato un errore:", error);
//   });

async function leggiFile() {
  try {
    const fileData = await readFile("./text.txt", { encoding: "utf-8" });
    console.log("async file letto:", fileData);
  } catch (error) {
    console.error("async si è verificato un errore:", error);
  }
}

leggiFile();

async function scriviFile() {
  try {
    const result = await writeFile(
      "./fileCreatoAsync.txt",
      "Questo è il contenuto del file creato dalla funzione writeFile async",
      { encoding: "utf-8" }
    );
    console.log("async file creato!");
  } catch (error) {
    console.error("async si è verificato un errore:", error);
  }
}

scriviFile();
