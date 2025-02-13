let piove = true;
let sole = false;
let nuvoloso = true;
let nebbia = false;
let arcobaleno = false;
let estate = false;
let inverno = true;

/*if (nuvoloso || piove) {
    serveOmbrello = true;
} else {
    serveOmbrello = false;
}*/
let serveOmbrello = piove || nuvoloso ? true : false;
console.log("mi serve l'ombrello?", serveOmbrello);

let manicaCorta = sole && (estate || !piove) ? true : false;
console.log("manica corta?", manicaCorta);

// Esempio esercizio pin
let pin = 3454565;

/*if (pin > 999 && pin <= 10000) {
  console.log("pin valido");
} else {
  console.log("pin non valido");
}*/

let pinValido = pin > 999 && pin <= 10000 ? "valido" : "non valido";
console.log("il pin è:", pinValido);

/*if (favouriteColor === "red") {
  console.log("il tuo colore preferito è il rosso");
} else if (favouriteColor === "black") {
  console.log("il tuo colore preferito è il nero");
} else if (favouriteColor === "green") {
  console.log("il tuo colore preferito è il verde");
} else {
  console.log("non conosco il tuo colore preferito");
}*/
let favouriteColor = "Red";
//favouriteColor = favouriteColor.toUpperCase();
console.log("lunghezza favouriteColour", favouriteColor.length);
console.log("favouriteColour maiuscolo", favouriteColor.toUpperCase());
console.log("favouriteColour minuscolo", favouriteColor.toLowerCase());

switch (favouriteColor.toLowerCase()) {
  case "red": {
    console.log("il tuo colore preferito è il rosso");
    break;
  }
  case "black": {
    console.log("il tuo colore preferito è il nero");
    break;
  }
  case "green": {
    console.log("il tuo colore preferito è il verde");
    break;
  }
  case "orange":
  case "dark-yellow": {
    console.log("il tuo colore preferito è una tonalità calda");
  }
  default: {
    console.log("non conosco il tuo colore preferito");
    break;
  }
}

console.log("favouriteColour", favouriteColor);

