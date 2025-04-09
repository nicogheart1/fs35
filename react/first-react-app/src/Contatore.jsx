import { useState } from "react";

// const numbers = [1,2,3,4];

// const [a,b,c,d] = numbers;

const Contatore = () => {

    const [conteggio, setConteggio] = useState(0);

    const [testo, setTesto] = useState("ciao");

    // let conteggio = 0;

    const incrementa = () => {
        console.log("incrementa di 1 il contatore");

        // conteggio = conteggio + 1;

        console.log("conteggio dentro", conteggio);
        setConteggio(conteggio + 1);
    };

    console.log("conteggio fuori", conteggio);

    return (
        <div>
            <p className={`elemento-${conteggio}`}>Hai cliccato {conteggio} volte</p>
            <button onClick={incrementa}>Incrementa conteggio</button>

            <div>
                <p>{testo}</p>
                <button onClick={() => setTesto("testo cambiato")}>Cambio testo</button>
            </div>
        </div>
    );
};

export default Contatore;