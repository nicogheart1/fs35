import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Pagina About</h1>
      <Card
        text="Sono la card della pagina About"
        onClick={() => {
          navigate("/prodotti/prodotto-about");
        }}
      />
    </div>
  );
};

export default About;
