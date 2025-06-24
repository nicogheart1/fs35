import express from "express";
import morgan from "morgan";
import multer from "multer";
import {
  createNewStudent,
  deleteStudent,
  getAllStudents,
  getStudentDetails,
  updateStudentDetails,
  uploadProfilePic,
} from "./controllers/student";
import "./controllers/passport";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: (res, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (res, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.get("/students", getAllStudents);

app.get("/students/:studentId", getStudentDetails);

app.post("/new-student", createNewStudent);

app.put("/students/:studentId", updateStudentDetails);

app.post("/students/:studentId/profilepic", upload.single("image"), uploadProfilePic);

app.delete("/students/:studentId", deleteStudent);

app.listen(3000, () => {
  console.log("Server partito sulla porta 3000");
});
