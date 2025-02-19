const student = {
  name: "Mario",
  surname: "Rossi",
  age: 28,
  
};

function Student(name, surname, age, address) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.address = address;
  this.classroom = "FS35";

  this.printFullName = () => {
    console.log(this.name + " " + this.surname);
  };
  this.isMaggiorenne = () => {
    console.log(this.age >= 18 ? "maggiorenne" : "minorenne");
  };
}

const student1 = new Student("Mario", "Rossi", 19, "via Roma");
const student2 = new Student("Simone", "Gialli", 17, "via Napoli");
const student3 = new Student("Roberto", "Bianchi", 25, "via Milano");
const student4 = new Student();

Object.freeze(student1);

student1.age = 28;

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);

student1.printFullName();
student2.printFullName();
student3.printFullName();
student4.printFullName();

student1.isMaggiorenne();
student2.isMaggiorenne();
student3.isMaggiorenne();
student4.isMaggiorenne();


console.log("Values:", Object.values(student3));
console.log("Keys:", Object.keys(student3));
