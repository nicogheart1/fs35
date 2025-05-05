function somma(a, b) {
  return a + b;
}

function Somma(props) {
  const calcolo = somma(props.num1, props.num2);

  props.onSumCalculated?.(calcolo);

  //   if (calcolo % 2 === 0) {
  //     return <div>il risultato è: {somma(props.num1, props.num2)}</div>;
  //   } else {
  //     return <div>numero dispari</div>;
  //   }

//   switch (calcolo % 2) {
//     case 0:
//       return <div>il risultato è: {calcolo}</div>;
//     default:
//       return <div>numero dispari</div>;
//   }

  return (
    <div>
      Calcolo della somma di {props.num1} e {props.num2}
      {calcolo % 2 === 0 ? (
        <div>il risultato è: {calcolo}</div>
      ) : (
        <div>numero dispari</div>
      )}
    </div>
  );
}

export default Somma;
