console.log("prima del ciclo for");

for (let i = 0; i <= 10; i++) {
  console.log("iterazione for n.", i);
}

console.log("dopo il ciclo for");

let x = 0;

while (x <= 10) {
  console.log("iterazione while n.", x);
  x++;
}

// Functions

let number = 20;

function somma(numero1, numero2) {
  console.log(numero1 + numero2);
}

somma(number, 15);
somma(30, 50);
somma(100, 150);
somma(77, 2);
