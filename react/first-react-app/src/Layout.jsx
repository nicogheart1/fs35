import { createContext, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import App from "./pages/App";
import About from "./pages/About";
import Prodotto from "./pages/Prodotto";

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

  return (
    <BrowserRouter>
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
                <li className="hover:underline">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/about" element={<About />} />
              <Route path="/prodotto/:productId" element={<Prodotto />} />

              <Route path="*" element={<>Page Non Found</>} />
            </Routes>
          </main>
          <footer>footer</footer>
        </UserProvider.Provider>
      </LanguageProvider.Provider>
    </BrowserRouter>
  );
};

export default Layout;
