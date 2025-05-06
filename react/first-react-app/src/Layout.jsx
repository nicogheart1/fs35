import { createContext, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import App from "./pages/App";
import About from "./pages/About";
import DettagliProdotto from "./pages/DettagliProdotto";
import ListaProdotti from "./pages/ListaProdotti";

export const LanguageProvider = createContext("ita");

export const UserProvider = createContext();

const Layout = (props) => {
  const [language, setLanguage] = useState("ita");

  const [user] = useState({
    name: "Mario",
    surname: "",
    birthday: "",
    avatar: "",
    score: 0,
  });

  const navigate = useNavigate();

  return (
    <LanguageProvider.Provider value={language}>
      <UserProvider.Provider value={user}>
        <header>
          <div className="flex flex-nowrap w-full justify-between items-center">
            <h1>{props.title}</h1>
            <button
              onClick={() => {
                setLanguage("eng");
              }}
            >
              eng
            </button>
            <button
              onClick={() => {
                setLanguage("ita");
              }}
            >
              ita
            </button>
            <h4>Lingua selezionata: {language}</h4>
          </div>

          <nav>
            <ul className="flex flex-row flex-nowrap gap-2 items-center border border-red-400 p-2">
              <li>
                <span
                  onClick={() => {
                    navigate(-1);
                  }}
                  className="hover:underline"
                >
                  Torna indietro
                </span>
              </li>
              <li className="hover:underline">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:underline">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:underline">
                <Link to="/prodotti">Prodotti</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />

            {/* <Route path="/prodotti" element={<ListaProdotti />} />
            <Route path="/prodotti/:productId" element={<DettagliProdotto />} /> */}

            <Route path="/prodotti" element={<ListaProdotti />}>
              <Route index element={<div>Seleziona un prodotto</div>} />
              <Route
                path="/prodotti/:productId"
                element={<DettagliProdotto />}
              />
            </Route>

            <Route path="*" element={<>Page Non Found</>} />
          </Routes>
        </main>
        <footer>footer</footer>
      </UserProvider.Provider>
    </LanguageProvider.Provider>
  );
};

export default Layout;
