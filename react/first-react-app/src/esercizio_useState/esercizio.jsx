const EsercizioUseState = () => {

  return (
    <form
      style={{
        display: "flex",
        gap: "16px",
      }}
    >
      <input name="username" type="text" required placeholder="Username"/>
      <input name="password" type="password" required placeholder="Password" />

      <button type="submit">Accedi</button>
    </form>
  );
};

export default EsercizioUseState;
