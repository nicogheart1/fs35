import { Request, Response } from "express";
import Joi from "joi";

type StudentI = {
  id: string;
  name: string;
  surname: string;
  age: number;
};

const studentIdSchema = Joi.string()
  .pattern(/^[0-9]{1,8}$/)
  .required()
  .min(1)
  .max(8);

const studentSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[a-zA-Z]{3,30}$/)
    .required()
    .min(3)
    .max(30),
  surname: Joi.string()
    .pattern(/^[a-zA-Z]{3,30}$/)
    .required()
    .min(3)
    .max(30),
  age: Joi.number().required().min(12).max(30),
});

let students: StudentI[] = [];

const getAllStudents = (request: Request, response: Response) => {
  if (students.length) {
    response.status(200).json(students);
  } else {
    response.status(500).send("Nessuno studente trovato");
  }
};

const getStudentDetails = (request: Request, response: Response) => {
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
};

const createNewStudent = (request: Request, response: Response) => {
  const { body } = request;
  const { name, surname, age } = body;

  const isBodyValid = studentSchema.validate(body);
  if (isBodyValid.error) {
    response.status(400).send(isBodyValid.error);
  } else {
    students.push({ name, surname, age, id: String(students.length + 1) });
    response.status(201).send("Studente aggiunto!");
  }
};

const updateStudentDetails = (request: Request, response: Response) => {
  const { params, body } = request;
  const { studentId } = params;

  if (studentId && body) {
    let trovato = false;

    students = students.map((value) => {
      if (studentId === value.id) {
        trovato = true;
        return { ...value, ...body };
      } else {
        return value;
      }
    });

    // Opzione alternativa
    // const index = students.findIndex((value) => value.id === studentId);
    // if (index >= 0) {
    //   students[index] = { ...students[index], ...body };
    //   response.status(200).send("Studente aggiornato!");
    // } else {
    //   response.status(404).send("Studente non trovato");
    // }

    if (trovato) {
      response.status(200).send("Studente aggiornato!");
    } else {
      response.status(404).send("Studente non trovato");
    }
  } else {
    response.status(400).send("Non è stato fornito lo studentId");
  }
};

const deleteStudent = (request: Request, response: Response) => {
  const { params } = request;
  const { studentId } = params;

  if (studentId) {
    const lunghezza = students.length;
    students = students.filter((value) => value.id !== studentId);
    if (lunghezza > students.length) {
      response.status(200).send("Studente rimosso!");
    } else {
      response.status(404).send("Studente non trovato");
    }
  } else {
    response.status(400).send("Non è stato fornito lo studentId");
  }
};

export {
  getAllStudents,
  getStudentDetails,
  createNewStudent,
  updateStudentDetails,
  deleteStudent,
};
