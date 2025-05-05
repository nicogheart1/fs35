import { useContext, useState } from "react";
import { UserProvider } from "../../Layout";

const ErrorComponent = (props) => {
  const { value } = props;
  return (
    <div className="text-red-500">
      {value.length < 5 ? <div>Errore: il testo è troppo corto</div> : null}
      {value.length > 15 ? <div>Errore: il testo è troppo lungo</div> : null}
      {value.includes("@") ? (
        <div>Errore: il carattare @ non è consentito</div>
      ) : null}
      <div>il testo è lungo {value.length}</div>
    </div>
  );
};

const EsercizioControlledForm = () => {
  //   const [username, setUsername] = useState("");

  const user = useContext(UserProvider);

  const [formData, setFormData] = useState({
    username: user.name,
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        className="border p-2 rounded"
        name="username"
        placeholder="Insrisci username"
        type="text"
        value={formData.username}
        onChange={(event) =>
          setFormData({ ...formData, username: event.target.value })
        }
      />
      <ErrorComponent value={formData.username} />

      <input
        className="border p-2 rounded"
        name="password"
        placeholder="Insrisci password"
        type="password"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <ErrorComponent value={formData.password} />
    </form>
  );
};

export default EsercizioControlledForm;
