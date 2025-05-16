import { useContext, useEffect, useState } from "react";
import "./App.css";
import NuovoComponente from "../components/nuovoComponente";
import Somma from "../components/somma";
import Clock from "../components/clock";
import Contatore from "../components/Contatore";
import EsercizioUseState from "../components/esercizio_useState/esercizio";
import Counter from "../components/Counter";
import ControlledForm from "../components/form/controlledForm";
import UncontrolledForm from "../components/form/uncontrolledForm";
import Card from "../components/Card";
import EsercizioControlledForm from "../components/esercizio_controlledForm/esercizioControlledForm";
import EsercizioRef from "../useRef/esercizioRef";
import EsercizioRipassoFormListe from "../components/esercizioRipassoFormListe/esercizioRipassoFormList";
import ChildrenComponent from "../components/ChildrenComponent";
import { LanguageProvider } from "../Layout";
import { useCounter } from "../hooks/useCounter";
import JsonServerComponent from "../components/JsonServerComponent";

// camelCase firstName
// PascalCase FirstName
// kebab-case
// snake_case
// UPPER_SNAKE_CASE
// lower-snake-case

function App() {
  const [lista, setLista] = useState([]);

  const { counter: count, increment } = useCounter();

  const language = useContext(LanguageProvider);

  useEffect(() => {
    if (count) {
      setLista([...lista, count]);
    }
  }, [count]);

  const visualizzaSomma = (somma) => {
    console.log("la somma è:", somma);
  };

  return (
    <>
      <h1 className="my-16 p-2">
        {language === "ita" ? "Titolo modificato 2" : "Modified title 2"}
      </h1>

      <div className="my-24 border p-16">
        <h2>Integrazione json-server</h2>
        <JsonServerComponent />
      </div>

      <div className="my-2 p-2">
        <button className="border rounded bg-amber-300 p-4" onClick={increment}>
          count is {count}
        </button>
      </div>

      <div className="my-24 border p-16">
        <h2>Children</h2>
        <ChildrenComponent>
          <h2>sono un titolo</h2>
          <div>sono un div</div>
          <ul>
            <li>lista 1</li>
            <li>lista 2</li>
            <li>lista 3</li>
            <li>lista 4</li>
          </ul>
        </ChildrenComponent>

        <ChildrenComponent>
          <button>cliccami</button>
          <Card text="sono una card children" />
        </ChildrenComponent>
      </div>

      <div className="my-2 p-2">
        <h2>Cards</h2>
        <div className="my-2 flex flex-wrap">
          {lista.map((value, index) => (
            <Card key={index} text={value} />
          ))}
        </div>
      </div>

      <div className="my-24 border p-16">
        <h2>Esercizio Ripasso Form e Liste</h2>
        <EsercizioRipassoFormListe />
      </div>

      <div className="my-24 border p-16">
        <h2>Esercizio Controlled Form</h2>
        <EsercizioControlledForm />
      </div>

      <div className="my-4 p-2 border">
        <h2>Controlled Form</h2>
        <ControlledForm />
      </div>

      <div className="my-4 p-2 border">
        <h2>Uncontrolled Form</h2>
        <UncontrolledForm />
      </div>

      <div className="my-4 p-2 border">
        <h2>Esercizio useState</h2>
        <EsercizioUseState />
      </div>

      <div className="my-4 p-2 border">
        <h2>Contatore (useEffect)</h2>
        <Counter />
      </div>

      <div className="my-4 p-2 border">
        <h2>Contatore (useState)</h2>
        <Contatore />
      </div>

      <div className="my-4 p-2 border">
        <h2>Clock</h2>
        <Clock />
      </div>

      <div className="my-24 border p-16">
        <h2>Esercizio useRef</h2>
        <EsercizioRef />
      </div>

      <div className="my-4 p-2 border">
        <Somma num1={27} num2={19} />

        <Somma num1={21} num2={9} onSumCalculated={visualizzaSomma} />

        <Somma num1={34} num2={15} />
      </div>

      <div className="my-2 p-2 border flex">
        <NuovoComponente testo="testo 1" descrizione="Descrizione 1" />
        <NuovoComponente
          testo="testo 2"
          titolo="Titolo 2"
          descrizione="Descrizione 2"
        />
      </div>
    </>
  );
}

export default App;
