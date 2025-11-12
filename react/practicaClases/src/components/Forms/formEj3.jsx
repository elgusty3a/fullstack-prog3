import React from 'react'
import { useState } from 'react'

function Form3() {
  const [usuario, setUsuario] = useState(
    {
      username: "",
      password: ""
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  }
  return (
    <form>
      <input
        type="text"
        name='nombre'
        placeholder="Username"
        value={usuario.username}
        onChange={handleChange}
        />
      <input
        type="password"
        name='pass'
        placeholder="Password"
        value={usuario.password}
        onChange={handleChange}
      />
    </form>
  )
}

export default Form3