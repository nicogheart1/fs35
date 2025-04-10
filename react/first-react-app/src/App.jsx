import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NuovoComponente from "./nuovoComponente";
import Somma from "./somma";
import Clock from "./clock";
import Contatore from "./Contatore";
import EsercizioUseState from "./esercizio_useState/esercizio";
import Counter from "./Counter";

// camelCase firstName
// PascalCase FirstName
// kebab-case
// snake_case
// UPPER_SNAKE_CASE
// lower-snake-case

function App() {
  const [count, setCount] = useState(0);

  const visualizzaSomma = (somma) => {
    console.log("la somma è:", somma);
  };

  return (
    <>
      <div className={false ? "classe-vera" : "classe-falsa"}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Titolo modificato 2</h1>

      <div>
        <h2>Esercizio useState</h2>
        <EsercizioUseState />
      </div>

      <div>
        <h2>Contatore (useEffect)</h2>
        <Counter />
      </div>

      <div>
        <h2>Contatore (useState)</h2>
        <Contatore />
      </div>

      <div>
        <h2>Clock</h2>
        <Clock />
      </div>

      <div>
        {15 + 5 == 21 ? <Somma num1={15} num2={5} /> : null}
        <Somma num1={27} num2={19} />

        <Somma num1={21} num2={9} onSumCalculated={visualizzaSomma} />

        <Somma num1={34} num2={15} />
      </div>

      <div className="flex">
        <NuovoComponente
          testo="testo 1"
          titolo={15 + 5 !== 20 ? "Titolo 1" : "Titolo alternativo"}
          descrizione="Descrizione 1"
        />
        <NuovoComponente
          testo="testo 2"
          titolo="Titolo 2"
          descrizione="Descrizione 2"
        />
      </div>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
