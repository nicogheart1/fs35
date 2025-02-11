let number = 0;
let text = "ciao";
let vero = true;

console.log(number, text, vero);

number = String(number);
vero = String(vero);

text = Number(text);
vero = Number(vero);

number = Boolean(number);
text = Boolean(text);

console.log(number, text, vero);

let number1 = 20;
let number2 = "20";
let number3 = 22;

let text1 = "1";
let text2 = true;

console.log("UGUAGLIANZA", number1 == number2);
console.log("UGUAGLIANZA STRETTA", number1 === number2);

console.log("DISUAGLIANZA", number1 != number2);
console.log("DISUGUAGLIANZA STRETTA", number1 !== number2);

console.log("UGUAGLIANZA", text1 == text2);
console.log("UGUAGLIANZA STRETTA 1", text1 === text2);
console.log("UGUAGLIANZA STRETTA 2", Boolean(text1) === text2);

console.log("MAGGIORE", text1 > text2);
console.log("MAGGIORE o UGUALE", number1 >= number2);

console.log("MINORE", number1 < number2);
console.log("MINORE o UGUALE", number1 <= number2);
