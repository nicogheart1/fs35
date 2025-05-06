import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Outlet, useNavigate } from "react-router-dom";

const ListaProdotti = () => {
  const [prodotti, setProdotti] = useState([]);

  const navigate = useNavigate();

  const getProductList = async () => {
    try {
      const response = await fetch("https://api.sampleapis.com/beers/ale");
      const data = await response.json();
      setProdotti(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div>
      <h1>Prodotti</h1>

      <Outlet />
    
      <div className="flex flex-row flex-wrap gap-4 my-8">
        {prodotti.slice(0,15).map((product) => (
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
