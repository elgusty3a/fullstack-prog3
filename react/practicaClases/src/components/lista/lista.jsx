import React, { useState, useEffect } from "react";

function Lista() {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    try {
      const response = await fetch("https://thronesapi.com/api/v2/Characters");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };
  
  const htmlRender = data.map((character) => {
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
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Personajes de Juego de Tronos
      </li>
      {htmlRender}
    </ul>
  </>
  )
}

export default Lista;
