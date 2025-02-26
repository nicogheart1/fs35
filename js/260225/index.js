const firstName = "Mario";
const surname = "Rossi";
const age = 18;

const fullName = firstName + " " + surname + ", è il nome del nostro utente che è " + age >= 18 ? "maggiorenne" : "minorenne" + ", la sua media dei voti è " + somma(27,25) / 2;

const somma = (a, b) => a + b;

const fullNameTemplateString = `${firstName} ${surname}, è il nome del nostro utente che è ${
  age >= 18 ? "maggiorenne" : "minorenne"
}, la sua media dei voti è ${somma(27, 25) / 2}`;

/*
const stringaParticolarmenteLunga =
  "Mario Rossi, è il nome del nostro utente che è maggiorenne, la sua media dei voti è 26, Mario Rossi,
  è il nome del nostro utente che è maggiorenne, la sua media dei voti è 26, Mario Rossi,
  è il nome del nostro utente che è maggiorenne, la sua media dei voti è 26";
  */

console.log(fullName);
console.log(fullNameTemplateString);
