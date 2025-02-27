// arrays
const auto = [
  { brand: "fiat", model: "500", color: "red", year: 2023 },
  { brand: "audi", model: "s3", color: "black" },
];

console.log(auto[0], auto[1]);

const [a = {}, b = {}, c = {}] = auto;
const [primo, secondo, terzo] = auto;
/*const a = auto[0];
const b = auto[1];
const c = auto[2];*/

console.log(a, b, c);

// objects
const veichle = {
  brand: "fiat",
  model: "500",
  color: "red",
  year: 2023,
  proprietario: {
    name: "Mario",
    surname: "Rossi",
    age: 23,
  },
};

const veichle2 = { brand: "audi", model: "s3", color: "black", year: 2024 };
console.log(veichle.brand, veichle.model, veichle.color);

const {
  brand,
  model,
  color = "red",
  year = 2015,
  proprietario: { name, surname, age },
  proprietario
} = veichle;

// opzione 1
//const { name, surname, age } = veichle.proprietario
// opzione 2
//const { name, surname, age } = proprietario;

const {
  brand: brand2,
  model: model2,
  color: color2 = "red",
  year: year2 = 2015,
} = veichle2;
/*const brand = veichle.brand;
const model = veichle.model;
const color = veichle.color;*/

console.log(brand, model, color, year, name, surname, age, proprietario);
console.log(brand2, model2, color2, year2);
