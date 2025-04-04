function somma(a,b){
    return a + b;
}

function Somma(props) {

    return (
        <div>il risultato è: {somma(props.num1, props.num2)}</div>
    );
}

export default Somma;