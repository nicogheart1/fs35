const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//numbers[numbers.length] = 10;
numbers.push(10, 11, "12", 13, 14, 15);

numbers[numbers.length - 1] = undefined;

numbers.pop();
numbers.pop();

numbers.unshift(-2, "-1", 0);

numbers.shift();
numbers.shift();

console.log(numbers, numbers.length);

/*for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}*/

function printElement(value, index, array) {
  if (index % 2 === 0) {
    console.log(value);
  }
}
numbers.forEach(printElement);

numbers.forEach((value, index, array) => {
  if (index % 2 === 0) {
    console.log(value);
  }
});
