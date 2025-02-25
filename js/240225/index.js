const numbers = [45, 4, 23, 77, 8, 43, 212, 3453];

/*numbers.forEach((value, i, array) => {
    console.log(i);
    numbers[i] = i;
});

console.log("array dopo forEach", numbers);*/

const resultFind = numbers.find((value, index, array) => {
  //return value === 8;
  //return value + 2 === 10;
  return value % 2 === 0;
});
console.log("risultato del find:", resultFind);

const resultFindIndex = numbers.findIndex((value, index, array) => {
  //return value === 8;
  //return value + 2 === 10;
  return value % 2 === 0;
});
//numbers[resultFindIndex] = "numero pari";
console.log("risultato del findIndex:", resultFindIndex);
//console.log(numbers)

const resultFilter = numbers.filter((value, index, array) => {
  //return value === 8;
  //return value + 2 === 10;
  //return value % 2 === 0;
  return value === 3;
});
console.log("risultato del filter:", resultFilter);

/*const testSplice = [1,1,3,4];
testSplice.splice(1,1, 2);
console.log("testSplice:", testSplice);*/

const auto = [
  { brand: "fiat", model: "500", color: "red" },
  { brand: "audi", model: "s3", color: "black" },
];

const test = (arr) => {
  const newArr = [];
  arr.forEach((value, index, array) => {
    newArr.push(value.brand + "-" + value.model);
  });
  return newArr;
};
const arrayResult = test(auto);
console.log(arrayResult);
console.log(auto);
