function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log("Numero randomico", Math.random(), randomNumber(1, 6));
