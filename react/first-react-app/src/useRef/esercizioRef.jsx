import { useEffect, useRef } from "react";

const EsercizioRef = ({ children }) => {
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
      console.log("passo ad ogni unmount");
    };
  }, []);

  return (
    <div>
      useRef
      {children ? <h4>{children}</h4> : null}
    </div>
  );
};

export default EsercizioRef;
