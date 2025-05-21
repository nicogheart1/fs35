const somma_math = (a: number, b:number): number => a + b;
const somma_text = (a: string, b:string): string => a + b;


function somma<T extends number | string>(a:T, b:T):T {
    return a + b;
}


const somma_matematica = somma<number>(5, 8);

const somma_stringhe = somma<string>("Ciao,", " come stai?");

const somma_boolean = somma<boolean>(true, false);

console.log(somma_matematica);
console.log(somma_stringhe);