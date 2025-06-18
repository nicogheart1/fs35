import express from "express";
import morgan from "morgan";
import {
  createNewStudent,
  deleteStudent,
  getAllStudents,
  getStudentDetails,
  updateStudentDetails,
} from "./controllers/student";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/students", getAllStudents);

app.get("/students/:studentId", getStudentDetails);

app.post("/new-student", createNewStudent);

app.put("/students/:studentId", updateStudentDetails);

app.delete("/students/:studentId", deleteStudent);

app.listen(3000, () => {
  console.log("Server partito sulla porta 3000");
});
