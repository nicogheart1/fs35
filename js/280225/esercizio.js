const movies = [
  {
    titolo: "Interstellar",
    regista: "Christoher Nolan",
    anno: 2014,
    genere: "Sci-fi",
  },
  {
    titolo: "Le ali della Libertà",
    regista: "Frank Darabont",
    anno: 1994,
    genere: "Thriller",
  },
  {
    titolo: "Django Unchained",
    regista: "Quentin Tarantino",
    anno: 2012,
    genere: "Western",
  },
  {
    titolo: "Quei bravi ragazzi",
    regista: "Martin Scorsese",
    anno: 1990,
    genere: "Thriller",
  },
];

function infoMovies(movies) {
  const risultato = { numMovies: movies.length };

  const numYears = [];
  const genereCount = {};

  movies.forEach((element) => {
    let trovato = numYears.find((value) => element.anno === value);
    if (!trovato) {
      numYears.push(element.anno);
    }

    if (genereCount[element.genere]) {
      genereCount[element.genere] = genereCount[element.genere] + 1;
    } else {
      genereCount[element.genere] = 1;
    }
  });

  risultato.numYears = numYears;
  risultato.numGenere = genereCount;

  return risultato;
}

const fine = infoMovies(movies);
console.log(fine);
