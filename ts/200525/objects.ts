interface StudentI {
    firstName: string;
    surname: string;
    age: number;
    isGraduated: boolean;
    imageURL: string;
    favouriteColor?: string;
};

const student1: StudentI = {
    firstName: "Mario",
    surname: "Rossi",
    age: 22,
    isGraduated: false,
    imageURL: "",
    favouriteColor: "red",
};

console.log(student1.firstName)

const student2: StudentI = {
    firstName: "Luca",
    surname: "Verdi",
    age: 33,
    isGraduated: true,
    imageURL: "",
}


const calcoloMedia = (studente: StudentI): number => {
    // TODO calcolo media voti dello studente;

    return Number();
}


const car: {
    readonly model: string;
    brand: string;
    color?: string;
} = {
    model: "500",
    brand: "Fiat"
};

car.brand = "FCA";
// car.model = "Panda";

car.color = "red"