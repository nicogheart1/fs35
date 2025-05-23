
type CountryT = "Italia" | "Estero";

interface AddressI {
    street: string;
    postCode: string;
    country: CountryT;
}

interface StudentI {
    name: string;
    surname: string;
    age: number;
    address?: AddressI;
}

const student1: StudentI = {
    name: "Mario",
    surname: "Rossi",
    age: 22
}


const student1WithAddress: Required<StudentI> = {
    name: "Mario",
    surname: "Rossi",
    age: 22,
    address: {
        street: "via Roma",
        postCode: "20100",
        country: "Italia",
    }
}

const student1Parziale: Partial<StudentI> = {
    name: "Luca",
    age: 24,
}

const student1NonModificabile: Readonly<StudentI> = {
    name: "Mario",
    surname: "Rossi",
    age: 22
}

// student1NonModificabile.name = "Luca";
// student1NonModificabile.age = 13;

const student1WithAddressNonModificabile: Readonly<Required<StudentI>> = {
    name: "Mario",
    surname: "Rossi",
    age: 22,
    address: {
        street: "via Roma",
        postCode: "20100",
        country: "Italia",
    }
}

// student1WithAddressNonModificabile.name = "Luca";


const student1Name: Pick<StudentI, 'name' | 'surname'> = {
    name: "Luca",
    surname: "Verdi"
}

const studentAge: Omit<StudentI, 'name' | 'surname' | 'address'> = {
    age: 24
}