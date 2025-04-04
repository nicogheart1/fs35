import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NuovoComponente from "./nuovoComponente";
import Somma from "./somma";

// camelCase firstName
// PascalCase FirstName
// kebab-case
// snake_case
// UPPER_SNAKE_CASE
// lower-snake-case

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Titolo modificato 2</h1>

      <div>
        <Somma num1={27} num2={19} />
        <Somma num1={21} num2={9} />
        <Somma num1={34} num2={15} />
      </div>

      <div className="flex">
        <NuovoComponente
          testo="testo 1"
          titolo="Titolo 1"
          descrizione="Descrizione 1"
        />
        <NuovoComponente
          testo="testo 2"
          titolo="Titolo 2"
          descrizione="Descrizione 2"
        />{" "}
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
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
