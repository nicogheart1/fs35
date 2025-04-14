import { useState } from "react";

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

//   const handleChange = (field, value) => {
//     setFormData({
//       ...formData,
//       [field]: value,
//     });
//   };

  const handleChange2 = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
  };


  return (
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
        //onChange={(event) => handleChange("email", event.target.value)}
        onChange={handleChange2}
        value={formData.email}
      />
      <input
        name="username"
        type="text"
        required
        placeholder="Username"
        //onChange={(event) => handleChange("username", event.target.value)}
        onChange={handleChange2}
        value={formData.username}
      />
      <input
        name="password"
        type="password"
        required
        placeholder="Password"
        //onChange={(event) => handleChange("password", event.target.value)}
        onChange={handleChange2}
        value={formData.password}
      />

      <button type="submit">Accedi</button>
    </form>
  );
};

export default ControlledForm;
