import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

type StudentI = {
  id: string;
  name: string;
  surname: string;
  age: number;
};

const students: StudentI[] = [];

app.get("/students", (request, response) => {
  if (students.length) {
    response.status(200).json(students);
  } else {
    response.status(500).send("Nessuno studente trovato");
  }
});

app.get("/students/:studentId", (request, response) => {
  const { params } = request;
  const { studentId } = params;

  if (studentId) {
    const result = students.find((value) => value.id === studentId);
    if (result) {
      response.status(200).json(result);
    } else {
      response.status(404).send("Studente non trovato");
    }
  } else {
    response.status(400).send("Non è stato fornito lo studentId");
  }
});

app.post("/new-student", (request, response) => {
  const { body } = request;
  const { name, surname, age } = body;
  // controllo body
  if (name && surname && age) {
    students.push({ name, surname, age, id: String(students.length + 1) });
    response.status(201).send("Studente aggiunto!");
  } else if (!name) {
    response.status(400).send("Non è stato fornito il name");
  } else if (!surname) {
    response.status(400).send("Non è stato fornito il cognome");
  } else if (!age) {
    response.status(400).send("Non è stata fornita l'età");
  } else {
    response.status(400).send("Impossibile creare lo studente");
  }
});

app.listen(3000, () => {
  console.log("Server partito sulla porta 3000");
});
