import { useEffect, useState } from "react";

const initFormData = {
  name: "",
  email: "",
  birthday: "",
  gender: "",
  premium: false,
};

const EsercizioRipassoFormListe = () => {
  const [formData, setFormData] = useState(initFormData);

  const [utenti, setUtenti] = useState([]);

  const [filtro, setFiltro] = useState("tutti");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.name) {
      setUtenti([...utenti, formData]);
      setFormData(initFormData);
    } else {
      alert("Il campo nome è obbligatorio!");
    }
  };

  useEffect(() => {
    console.log("Lista utenti è stata aggiornata!", utenti);
  }, [utenti]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="birthday"
          type="date"
          max="2003-01-01"
          value={formData.birthday}
          onChange={handleChange}
        />
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="" disabled>
            --Seleziona genere--
          </option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <div>
          <input
            type="checkbox"
            name="premium"
            checked={formData.premium}
            onChange={handleChange}
          />
          <label for="premium">Premium</label>
        </div>
        <button type="submit">Registra</button>
      </form>
      <div className="my-4 border-t-1">
        <h4>Filtri</h4>
        <div>Filtro applicato: {filtro}</div>
        <div className="flex gap-4">
          <button onClick={() => setFiltro("premium")} className={filtro === "premium" && "!bg-amber-500"}>Premium</button>
          <button onClick={() => setFiltro("base")} className={filtro === "base" && "!bg-amber-500"}>Base</button>
          <button onClick={() => setFiltro("tutti")} className={filtro === "tutti" && "!bg-amber-500"}>Tutti</button>
        </div>
      </div>
      <ul className="my-4 border-t-1 flex gap-4 items-center justify-center">
        {utenti.filter((value) => {
          if (filtro === "premium") {
            return value.premium;
          }
          if (filtro === "base") {
            return !value.premium;
          }
          return value;
        }).map((value, index) => (
          <li key={index} className={value.premium && "text-blue-500"}>
            {value.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default EsercizioRipassoFormListe;
