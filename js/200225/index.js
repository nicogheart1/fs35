const numbers = [7, 4, 2, 9, 8, 5, 1, 2, 3];

const somma = (a, b) => a + b;

numbers[numbers.length] = 55;

numbers[numbers.length - 1] = "ultimo elemento";

console.log(numbers, numbers.length, numbers[numbers.length - 1]);
console.log(numbers[0], numbers[6], numbers[65]);

console.log(numbers[somma(3, 1)]);

const lista = [
  1,
  "ciao",
  true,
  () => {
    console.log("prova");
  },
  { id: 3, name: "Mario" },
  [1, 2, 3],
];

lista[1] = "hello";
console.log(lista[1]);

console.log(lista[5][1]);
