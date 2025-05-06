import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DettagliProdotto = () => {
    const { productId } = useParams();

    useEffect(() => {
        fetch(`https://www.apiprodotto.com/prodotto/${productId}`);
    }, [productId]);

    return (
        <div>
            <h1>Pagina del prodotto: {productId}</h1>
        </div>
    );
};

export default DettagliProdotto;