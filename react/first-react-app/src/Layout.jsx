import { createContext, useState } from "react";

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
    <LanguageProvider.Provider value={language}>
      <UserProvider.Provider value={user}>
        <header className="flex flex-nowrap w-full justify-between items-center">
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
        </header>
        <main>{props.children}</main>
        <footer>footer</footer>
      </UserProvider.Provider>
    </LanguageProvider.Provider>
  );
};

export default Layout;
