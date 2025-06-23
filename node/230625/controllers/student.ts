import { Request, Response } from "express";
import Joi from "joi";
import { db } from "./db";

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

const getAllStudents = async (request: Request, response: Response) => {
  try {
    const students = await db.manyOrNone(`
        SELECT * FROM students;    
    `);
    response.status(200).json(students);
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};

const getStudentDetails = async (request: Request, response: Response) => {
  try {
    const { params } = request;
    const { studentId } = params;

    const isStudentIdValid = studentIdSchema.validate(studentId);

    if (!isStudentIdValid.error) {
      const student = await db.oneOrNone(
        `
        SELECT * FROM students WHERE id=$1
        `,
        Number(studentId)
      );
      if (student) {
        response.status(200).json(student);
      } else {
        response.status(404).send(`Lo studente con id ${studentId} non esiste`);
      }
    } else {
      response.status(400).json(isStudentIdValid.error);
    }
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};

const createNewStudent = async (request: Request, response: Response) => {
  try {
    const { body } = request;
    const { name, surname, age } = body;

    const isBodyValid = studentSchema.validate(body);
    if (!isBodyValid.error) {
      await db.none(
        `
        INSERT INTO students (name, surname, age) VALUES ($1, $2, $3);
        `,
        [name, surname, age]
      );

      response.status(201).send("Studente aggiunto!");
    } else {
      response.status(400).json(isBodyValid.error);
    }
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};

const updateStudentDetails = async (request: Request, response: Response) => {
  try {
    const { params, body } = request;
    const { studentId } = params;
    const { name, surname, age } = body;

    const isStudentIdValid = studentIdSchema.validate(studentId);
    const isBodyValid = studentSchema.validate(body);

    if (!isStudentIdValid.error && !isBodyValid.error) {
      await db.none(
        `
          UPDATE students SET name=$2, surname=$3, age=$4 WHERE id=$1
        `,
        [studentId, name, surname, age]
      );
      response.status(200).send("Studente aggiornato!");
    } else {
      response.status(400).json(isStudentIdValid.error || isBodyValid.error);
    }
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};

const deleteStudent = async (request: Request, response: Response) => {
  try {
    const { params } = request;
    const { studentId } = params;

    const isStudentIdValid = studentIdSchema.validate(studentId);

    if (!isStudentIdValid.error) {
      await db.one(
        `
         SELECT * FROM students WHERE id=$1;
         `,
        Number(studentId)
      );
      await db.none(
        `
          DELETE FROM students WHERE id=$1;
        `,
        Number(studentId)
      );
      response.status(200).send("Studente eliminato");
    } else {
      response.status(400).json(isStudentIdValid.error);
    }
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};

const uploadProfilePic = async (request: Request, response: Response) => {
  try {
    const { params, file } = request;
    const { studentId } = params;
    const { path } = file;
    
    const isStudentIdValid = studentIdSchema.validate(studentId);

    if (!isStudentIdValid.error && path) {
      await db.none(
        `
          UPDATE students SET profilepic=$2 WHERE id=$1
        `,
        [studentId, path]
      );
      response.status(200).send("Immagine studente caricata!");
    } else {
      response.status(400).json(isStudentIdValid.error);
    }
  }catch (error) {
    response.status(500).json({ msg: error });
  }
};

export {
  getAllStudents,
  getStudentDetails,
  createNewStudent,
  updateStudentDetails,
  deleteStudent,
  uploadProfilePic,
};
