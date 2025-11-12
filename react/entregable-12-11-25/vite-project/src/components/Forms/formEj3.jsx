import React from "react";
import { useState } from "react";

function Form3() {
  const [usuario, setUsuario] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("nombre", e.target[0].value);
    sessionStorage.setItem("password", e.target[1].value);
    console.log(usuario);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        // value={usuario.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        // value={usuario.password}
        onChange={handleChange}
      />
      <input type="submit" value="Enviar " />
    </form>
  );
}

export default Form3;
