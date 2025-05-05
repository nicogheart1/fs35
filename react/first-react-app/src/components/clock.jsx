const Clock = () => {

    const funzioneDaInvocare = (valore) => {
        console.log(new Date().toLocaleTimeString(), valore);
    }

    return(<div>
        <button onClick={() => {funzioneDaInvocare("ciao")}}>Che ore sono 1?</button>
        <button onClick={funzioneDaInvocare}>Che ore sono 2?</button>
    </div>)
};

export default Clock;