import React, { useState, useEffect } from "react";
import Tablabutton from "./tablabutton";
import Search from "./search.jsx";

function Tabla() {
  const [datos, setDatos] = useState([]);
  const datosTabla = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setDatos(data);
  };
  useEffect(() => {
    datosTabla();
  }, []);

  const eraseUser = (user) => {
    console.log(`Quiero borrar a: ${user.id}, ${user.name}, ${user.username}, ${user.email}`);
    setDatos(datos.filter((dato) => dato.id !== user.id));
  };

  const searchUser = (searchTerm) => {
    console.log("Buscar usuario:", searchTerm);
    if (searchTerm === "") {
      datosTabla();
    } else {
      const filterData = datos.filter((dato) =>
        dato.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dato.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dato.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDatos(filterData);
    }
  };

  const renderData = datos.map((dato) => {
    return (
      <tr key={dato.id}>
        <th>{dato.id}</th>
        <th>{dato.name}</th>
        <th>{dato.username}</th>
        <th>{dato.email}</th>
        <td>
          <Tablabutton handleClick={eraseUser} datos={dato} />
        </td>
      </tr>
    );
  });

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <h1>LISTA DE USUARIOS</h1>
      <br />
      <div>
        <Search handleChange={searchUser}/>
      </div>
      <br />
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderData}</tbody>
      </table>
    </div>
  );
}

export default Tabla;
