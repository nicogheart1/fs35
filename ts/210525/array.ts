

const numbers: number[] = [1,2,3,4,5,6,7,8,9];

const strings: string[] = ["ciao", "come", "stai"];

const mixed: (string | number)[] = [1,2,3,4,5,6,7,8,9, "ciao", "come", "stai"];

const arr: (string | boolean)[] = ["ciao", true];


interface StudentI {
    name: string;
    surname: string;
    age: number;
    isGraduated: boolean;
    gender: "M" | "F" | "O";
}

const student1: StudentI = {
    name: "Mario",
    surname: "Rossi",
    age: 23,
    isGraduated: false,
    gender: "M"
}
const student2: StudentI = {
    name: "Marco",
    surname: "Verdi",
    age: 23,
    isGraduated: false,
    gender: "M"
}

const students: StudentI[] = [student1, student2];
