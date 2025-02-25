const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersString = numbers.map((value, index, array) => {
  //return String(value);
  //return value * 2;
  if (value % 2 === 0) {
    return { value: value, isEven: true };
  } else {
    return { value: value, isEven: false };
  }
});

//const numberDouble = numbers.map(n => n*2);

//console.log(numbers);
//console.log(numbersString);


/*let somma = 0;
numbers.forEach((value, index, array) => {
    somma = somma + value;
});
const media = somma / numbers.length;*/

const somma = numbers.reduce((accumulo, value, index, array) => {
    return accumulo = accumulo + value;
}, 0);
const media = somma / numbers.length;
//array.reduce(arg1, arg2);
const somma_in_line = numbers.reduce((acc, number) => acc+= number, 0);

console.log("somma", somma, somma_in_line);
console.log("media", media);


