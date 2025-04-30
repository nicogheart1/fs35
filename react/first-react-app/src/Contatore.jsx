import { useState } from "react";
import { useCounter } from "./hooks/useCounter";

// const numbers = [1,2,3,4];

// const [a,b,c,d] = numbers;

const Contatore = () => {
    const {counter: conteggio, increment} = useCounter();

    const [testo, setTesto] = useState("ciao");

    // let conteggio = 0;

    console.log("conteggio fuori", conteggio);

    return (
        <div>
            <p className={`elemento-${conteggio}`}>Hai cliccato {conteggio} volte</p>
            <button onClick={increment}>Incrementa conteggio</button>

            <div>
                <p>{testo}</p>
                <button onClick={() => setTesto("testo cambiato")}>Cambio testo</button>
            </div>
        </div>
    );
};

export default Contatore;