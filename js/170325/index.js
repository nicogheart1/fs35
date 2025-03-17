console.log("io sono js proveniente da un file esterno");

//const h1 = document.getElementById("title");
//const h1 = document.getElementsByClassName("title");
//const h1 = document.getElementsByTagName("p");
//const h1 = document.querySelector("p")
const h1 = document.querySelectorAll("p");

//const paragraphs = document.getElementsByTagName("p");
//const paragraphsQuery = document.querySelectorAll("p");

console.log("elemento h1", h1);

//console.log(paragraphs)
//console.log(paragraphsQuery)


function somma(a, b) {
    return a + b;
}

const result = somma(9, 5);
console.log("il risultato è",result)
const paragraph = document.querySelector("p");
paragraph.innerText = `ll risultato è: ${result}`