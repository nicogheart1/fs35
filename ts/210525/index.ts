interface StudentI {
    name: string;
    surname: string;
    age: number;
    isGraduated: boolean;
    gender: "M" | "F" | "O";
}

interface StudentWithAddressI extends StudentI {
    city: string;
    address: string;
    postCode: string;
}


const student1: StudentI = {
    name: "Mario",
    surname: "Rossi",
    age: 23,
    isGraduated: false,
    gender: "M"
}

const student2: StudentWithAddressI = {
    name: "Lucia",
    surname: "Verdi",
    age: 22,
    isGraduated: false,
    gender: "F",
    city: "Milano",
    postCode: "20100",
    address: "via Roma"
}







type CountryT = "Colombia" | "Italia" | "Spagna" | "Venezuela";

const country1: CountryT = "Colombia";
const country2: CountryT = "Italia";
const country3: CountryT = "Spagna";
