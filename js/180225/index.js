// Le callback
// Le arrow function
// Lo scope delle variabili

function visualizzaRisultato(valore) {
  console.log(valore);
}

function salvaRisultato(risultato) {
  console.log("salvo il risultato da qualche parte", risultato);
}

function somma(val1, val2, callback) {
  const risultato = val1 + val2;
  callback(risultato);
}

const somma_arrow = (arg1, arg2, callback) => {
  const risultato = arg1 + arg2;
  callback(risultato);
};

// () => {}

function differenza(val1, val2, callback) {
  const risultato = val1 - val2;
  callback(risultato);
}

somma(66, 321, visualizzaRisultato);
somma(456, 3433, salvaRisultato);
differenza(78, 21, salvaRisultato);

somma(10, 20, (res) => {
  console.log("il risultato è", res);
});

somma_arrow(50, 40, visualizzaRisultato);

// Introduzione agli oggetti
// L'operatore in e il cido for in
// Valore Vs Riferimento

let studentName = "Mario";
let studentSurname = "Rossi";
let studentAge = 23;

const student = {
  name: "Mario",
  surname: "Rossi",
  age: 23,
  fuoriCorso: false,
};

//console.log(studentName, studentSurname, studentAge);
console.log(student);

student.age = 24;

console.log("l'età dello studente è", student.age, student["age"]);
console.log(student);

student.address = "via Roma 15";
console.log(student.address);
student.fuoriCorso = undefined;
console.log(student);

for (let key in student) {
  console.log(key, student[key]);
}

const student2 = student;
student2.name = "Simone";

console.log(student, student2);

const student3 = {};

for (let key in student) {
  student3[key] = student[key];
}

console.log(student, student3);

student3.name = "Alberto";

console.log(student, student3);
