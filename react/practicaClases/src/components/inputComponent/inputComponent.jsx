import React, { useState } from "react";

function Inputcomponent() {
  const [myText, setMyText] = useState("Ingresa tu nombre");
  const [valueText, setValueText] = useState("");

  const handleChange = (e) => {
    setValueText(e.target.value);
  };
  return (
    <div>
      <h1>Bienvenido {valueText}</h1>
      <input
        type="text"
        name=""
        placeholder={myText}
        id=""
        value={valueText}
        onChange={handleChange}
      />
    </div>
  );
}

export default Inputcomponent;
