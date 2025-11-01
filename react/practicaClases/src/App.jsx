import "./App.css";
import Card from "./components/Card/card.jsx";
import Contador from "./components/contador/contador.jsx";
import Inputcomponent from "./components/inputComponent/inputComponent.jsx";
import Lista from "./components/lista/lista.jsx";
import Tabla from "./components/tabla/tabla.jsx";

const datosCard = {
  titulo: "Zapas re copadas",
  precio: "45000",
  img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
}

function App() {

  return (
    <>
      <h1>Crear un componente y compruebe como se usa el children</h1>
      <Card data={datosCard}>
        <p>Hola esto viene de App por children</p>
      </Card>
      <br />
      <h1>PRACTICAS DE USESTATE</h1>
      <br />
      <h1>1 Crear un componente el cual muestre la variacion de un texto a medida que el usuario va escribiendo en el input</h1>
      <div>
        <Inputcomponent />
      </div>
      <h1>Generar una tabla, la cual va a tener datos precargados y cada registro debe tener un boton que muestre por alert el registro</h1>
      <Tabla />
      <br />
      <h1>PRACTICAS DE USESTATE</h1>
      <br />
      <h1>1 Hacer uso de useEffect para consultar datos a un servicio externo y renderice en una lista.</h1>
      <br />
      <div>
        <Lista />
      </div>
      <br />
      <h1>2 Crear un contador con useState, este mismo debera tener un useEffect para que cada vez que el contador cambie el useEffect muestre un cartel con dicho cambio. Si el contador llega a 10, el mensaje debe ser  Llegaste a 10!.</h1>
      <br />
      <div>
        <Contador />
      </div>
      <br />
    </>
  );
}

export default App;
