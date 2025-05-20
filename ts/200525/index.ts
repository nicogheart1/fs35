let numero: number = 16;

function somma_classica(a: number, b: number): number {
    return a + b;
}

const somma = (a: number, b: number): string => {
    // return a + b;

    /*if (a + b < 10) {
        return null;
    }*/

    return `La somma è: ${a + b}`;
}

console.log("La somma è:", somma(1, numero));

let result = somma(5, 9);

let result_2: string = String(somma_classica(5, 8));

console.log(result_2, typeof result_2, result_2.toUpperCase());



const testFn = (): void => {
    console.log("ciao sono una funzione")
    // senza il return esplicito il valore è undefined e quindi void
};

testFn();


const errorFn = () => {
    throw new Error("si è verificato un errore");
};

errorFn();
console.log("il codice arriva qui")
