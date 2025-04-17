import { useEffect, useRef } from "react";

const EsercizioRef = () => {
  const isAlreadyMountedRef = useRef(false);

  useEffect(() => {

    console.log("passo ad ogni mount");

    if (!isAlreadyMountedRef.current) {
        console.log("montato per la prima volta");
        isAlreadyMountedRef.current = true;
    } else {
        console.log("montato per la seconda volta");
    }


    return () => {
        console.log("passo ad ogni unmount")
    }
  }, []);

  return <div>useRef</div>;
};

export default EsercizioRef;
