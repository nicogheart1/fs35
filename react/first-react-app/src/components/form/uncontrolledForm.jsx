import { useRef } from "react";

const UncontrolledForm = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSumbit = (event) => {
    event.preventDefault();

    console.log("form", {
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <form
      style={{
        display: "flex",
        gap: "16px",
      }}
      onSubmit={handleSumbit}
    >
      <input name="email" type="email" placeholder="Email" ref={emailRef} />
      <input
        name="username"
        type="text"
        placeholder="Username"
        ref={usernameRef}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        ref={passwordRef}
      />

      <button type="submit">Accedi</button>
    </form>
  );
};

export default UncontrolledForm;
