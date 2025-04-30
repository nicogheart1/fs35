import { useEffect, useState } from "react";
import { useCounter } from "./hooks/useCounter";

const Counter = () => {
  const [altroState, setAltroState] = useState(0);

  const {counter, increment, decrement, reset } = useCounter();

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // component mount
  useEffect(() => {
    console.log("counter montato");

    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());

      increment();
    }, 1000);

    return () => {
        clearInterval(intervalId);
    };
  }, []);

  // component update
  useEffect(() => {
    //console.log("counter aggiornato", counter);
  }, [counter]);

  useEffect(() => {
    //console.log("altroState aggiornato", altroState);
  }, [altroState]);

  return (
    <>
      <h4>{time}</h4>
      <div>Counter is: {counter}</div>
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
      <button onClick={reset}>Reset</button>

      <button onClick={() => setAltroState(altroState + 1)}>
        Aggiorna altro state
      </button>
    </>
  );
};

export default Counter;
