import React, { useState, useEffect } from "react";
import Search from "../search/search.jsx";


function Lista() {
  const [data, setData] = useState([]);
  const [datosFiltrados, setDataFiltered] = useState([]);

  const getApiData = async () => {
    try {
      const response = await fetch("https://thronesapi.com/api/v2/Characters");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // console.log(data);
      setData(data);
      setDataFiltered(data);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };

  const searchUser = (searchTerm) => {
    console.log("Buscar usuario:", searchTerm);
    if (searchTerm === "") {
      setDataFiltered(data);
    } else {
      const filterData = data.filter((dato) =>
        dato.fullName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDataFiltered(filterData);
    }
  };

  const htmlRender = datosFiltrados.map((character) => {
    return (
    <li key={character.id} className="list-row">
      <div>
        <img
          className="size-10 rounded-box"
          src={character.imageUrl}
        />
      </div>
      <div>
        <div>{character.fullName}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {character.family}
        </div>
        <div>
          <p className="list-col-wrap text-xs">{character.title}</p>
        </div>
      </div>
    </li>
    )
  }
  );

  useEffect(() => {
    getApiData();
  }, []);

  return (
  <>
    <ul className="list bg-base-100 rounded-box shadow-md">
      <div>
        <Search handleChange={searchUser}/>
      </div>
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Personajes de Juego de Tronos
      </li>
      {htmlRender}
    </ul>
  </>
  )
}

export default Lista;
