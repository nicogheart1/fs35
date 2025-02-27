/*
Dato uno studente oggetto nidificato con informazioni sulle proprietà e voti,
utilizza la destrutturazione dell'oggetto per creare variabili nome, età e voto che contengano i valori dell'oggetto nidificato.
const student = {
  info: { name: "Bob", age: 25 },
  grades: { math: 95, science: 89 }
};
*/

const student = {
  info: { name: "Bob", age: 25 },
  grades: { math: 95, science: 89 },
};

// opzione 1
const { info, grades } = student;
const { name, age } = info;
const { math, science } = grades;

// opzione 2
/*const { name, age } = student.info;
const { math, science } = student.grades;*/

// opzione 3
/*const {
  info: { name, age },
  grades: { math, science },
} = student;*/

console.log(name, age, math, science);
