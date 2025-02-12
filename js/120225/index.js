let piove = true;
let sole = false;
let nuvoloso = true;
let nebbia = false;
let arcobaleno = false;
let estate = false;
let inverno = true;

let numero = 1;
let testo = "";

console.log(!!numero, !!testo);

//console.log("è una bella giornata?", sole && estate);
//console.log("devo prendere l'ombrello?", piove || nuvoloso);

//console.log("prova", numero && testo);

/* OPERATORE LOGICO AND (&&)
    true && true = true;
    true && false = false;
    false && true = false;
    false && false = false;
*/

/* OPERATORE LOGICO OR (||)
    true || true = true;
    true || false = true;
    false || true = true;
    false || false = false;
*/

if (sole && estate) {
  console.log("è una bella giornata!");



} else if (inverno && piove) {
  console.log("non è una bella giornata");
} else {

    if (nuvoloso || piove) {
        console.log("prendi l'ombrello");
    }

}


//         A                  B                        C
if ((sole && estate) || (sole && inverno) || (nuvoloso && !arcobaleno)) {
    console.log("questa roba qui")
}

console.log("fuori");
