// rest parameter
function somma(a, b, ...args) {
  console.log("args", args);
  return a + b + args.reduce((acc, value) => (acc += value), 0);
}

//console.log(somma(somma(somma(5,4), 8), 10));
console.log(somma(5,4));
console.log(somma(5,4,8,10, 12,18,99,200));


// spread operator
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

const object = { weather: "sunny"};

const veichle2 = { ...veichle, brand: "audi", model: "s3" };
console.log(veichle);
console.log(veichle2);

const veichle3 = { ...veichle, ...veichle2, model: "a1", ...object };
console.log(veichle3);

const evenNumbers = [0,2,4,6,8,10];
const oddNumbers = [1,3,5,7,9];

const evenNumbersDuplicate = [...evenNumbers];
evenNumbersDuplicate.push(14);
console.log(evenNumbers);

const numbers = [...evenNumbers, ...oddNumbers, 11, 12, 13];
             // [0,2,4,6,8,10, 1,3,5,7,9, 11, 12, 13]

console.log(numbers);
