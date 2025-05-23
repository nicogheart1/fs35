

interface StudentI {
    name: string;
    surname: string;
    age: number;

    [key: string]: string | number;
}

const student1: StudentI = {
    name: "Mario",
    surname: "Rossi",
    age:23
}

student1["name"];
student1.name;

student1.isGraduated = "diplomato";

student1.mediaVoti = 7.2


type AutoT = Record<string, string | number>

const car: AutoT = {
    model: "500",
    color: "red",
    brand: "fiat",
    cv: 70
}