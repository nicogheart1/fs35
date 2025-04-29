import { useContext } from "react";
import { LanguageProvider } from "./Layout";

const lang_eng = {
    title: "Title",
    button: "Click me"
}

const lang_it = {
    title: "Titolo",
    button: "Cliccami",
};

const ChildrenComponent = ({ children }) => {
    const language = useContext(LanguageProvider);

    const { title, button } = language === "ita" ? lang_it : lang_eng;
  return (
    <>
        <h4>{title} Children</h4>
        <button>{button}</button>
      <div className="children-component">{children}</div>
    </>
  );
};

export default ChildrenComponent;
