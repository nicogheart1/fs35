/*
Scrivi una funzione

che prende un array di oggetti come parametro, 

ognuno dei quali rappresenta un libro con le seguenti proprietà: titolo, autore, anno e genere. // object

La funzione dovrebbe restituire un array di stringhe

che contiene il titolo e l'autore di ogni libro nel formato "titolo di autore". 

Se l'anno del libro è successivo al 2000, aggiungi " - Moderno" alla fine della stringa. 

Se il genere del libro è "Science Fiction", aggiungi " - SciFi" alla fine della stringa.

Stampa il nuovo array
*/

const libreria = [
  {
    titolo: "Il librone",
    autore: "Mattia Lucia",
    anno: 2025,
    genere: "Moderno",
  },
  {
    titolo: "Antonio",
    autore: "Antony Frank",
    anno: 2022,
    genere: "Science Fiction",
  },
  {
    titolo: "Le cose",
    autore: "Francesco Cose",
    anno: 2000,
    genere: "Moderno",
  },
  {
    editore: "Mondadori",
    titolo: "Paolo",
    autore: "Paolino Fra",
    anno: 1924,
    genere: "Science Fiction",
  },
  {
    titolo: "Paradiso",
    autore: "Giacomino Cristi",
    anno: 2011,
    genere: "Science Fiction",
  },
];

function informazioniLibro(libri) {
  return libri.map(({ titolo, autore, anno: annoPubblicazione, genere, editore = "Feltrinelli" }, index, array) => {
    let testo = `${editore}: ${titolo} di ${autore}`;

    if (annoPubblicazione > 2000) {
      testo += " - Moderno";
    }
    if (genere === "Science Fiction") {
      testo += " - SciFi";
    }

    return testo;
  });
}

const nuoviLibri = informazioniLibro(libreria);
console.log(nuoviLibri);
