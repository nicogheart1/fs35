import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [altroState, setAltroState] = useState(0);

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // component mount
  useEffect(() => {
    console.log("counter montato");

    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());

      setCounter((counter) => counter + 1);
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

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

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
