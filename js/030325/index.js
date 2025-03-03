setTimeout(
    () => {
        console.log("tempo scaduto");
    },
    10000
);

console.log(1);

const timeoutId = setTimeout(() => {
    console.log(2);
}, 1000);

clearTimeout(timeoutId);

console.log(3);

let contatore = 0;

const intervalId = setInterval(() => {
    console.log("è passato 1 secondo", contatore);
    contatore += 1;

    if (contatore > 10) {
        // TODO interrompere interval
        clearInterval(intervalId);
    }
}, 1000);
