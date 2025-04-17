import { useEffect, useState } from "react";

const EsercizioRipassoFormListe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthday: "",
    gender: "",
    premium: false,
  });

  const [utenti, setUtenti] = useState([]);

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
    setUtenti([...utenti, formData]);
  };

  useEffect(() => {
    console.log("Lista utenti è stata aggiornata!", utenti)
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
    </>
  );
};

export default EsercizioRipassoFormListe;
