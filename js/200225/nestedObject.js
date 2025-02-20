/* Il nostro oggetto student è incompleto. Abbiamo bisogno di aggiungere a questo oggetto,
un ulteriore oggetto al suo interno di nome personalData.
L'oggetto nested personalData deve contenere le seguenti proprietà: name, surname, age. Sapresti inserirlo?

Stampa a schermo l'oggetto nested personalData che dovrà trovarsi dentro student.
const student = { id: 1, school: "Liceo", year: 3, }; */

const student = {
    id: 1,
    school: "Liceo",
    year: 3,
    printHello: () => {
        console.log("Hello")
    },
    nestedObject: {
        libero: "Prova",
        test: 15,
        prova: false,
        school: {
            ky5: "test"
        }
    },
    list: [1,2,3]
 };

 console.log(student.nestedObject.test);

 student.personalData = {
    name: "Mario",
    surname: "Rossi",
    age: 24
 };

 console.log(student)
