// import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Outlet, useNavigate } from "react-router-dom";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ListaProdotti = () => {
  const navigate = useNavigate();

  const {
    data: prodotti = [],
    error,
    isLoading: loading,
    mutate: updateProdotti,
  } = useSWR("https://api.sampleapis.com/beers/ale", fetcher);

  // const [prodotti, setProdotti] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const getProductList = async () => {
  //   try {
  //     setError(false);
  //     setLoading(true);
  //     const response = await fetch("https://api.sampleapis.com/beers/ale");
  //     const data = await response.json();
  //     setProdotti(data);
  //   } catch (error) {
  //     console.error(error);
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getProductList();
  // }, []);

  return (
    <div>
      <h1>Prodotti</h1>

      <Outlet />

      {error && (
        <div className="text-red-500">
          Si è verificato un errore! Riprova più tardi
        </div>
      )}

      {loading && <div>Caricamento in corso...</div>}

      <button onClick={() => updateProdotti()}>Aggiorna prodotti</button>

      <div className="flex flex-row flex-wrap gap-4 my-8">
        {prodotti.slice(0, 15).map((product) => (
          <Card
            key={product.id}
            text={product.name}
            onClick={() => navigate(`/prodotti/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default ListaProdotti;
