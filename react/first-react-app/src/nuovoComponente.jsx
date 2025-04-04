function NuovoComponente(props) {
    // tutto quello che mi pare in js

    console.log("props", props);


    return (
        <div>
            <h2>{props.titolo}</h2>
            <p>{props.testo}</p>
            <p>{props.descrizione}</p>
        </div>
    );
}

export default NuovoComponente;