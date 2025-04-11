import { useEffect, useState } from "react";

const EsercizioUseState = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  useEffect(() => {
    if (formData.email === "mario.rossi@gmail.com") {
      alert("ciao mario");
    }
  }, [formData]);

  return (
    <>
      <form
        style={{
          display: "flex",
          gap: "16px",
        }}
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Dati del form:", formData);
        }}
      >
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          onChange={(event) => handleChange("email", event.target.value)}
        />
        <input
          name="username"
          type="text"
          required
          placeholder="Username"
          onChange={(event) => handleChange("username", event.target.value)}
        />
        <input
          name="password"
          type="password"
          required
          placeholder="Password"
          onChange={(event) => handleChange("password", event.target.value)}
        />

        <button type="submit">Accedi</button>
      </form>
    </>
  );
};

export default EsercizioUseState;
