import "./App.css";
import Card from "./components/Card/card.jsx";
import Inputcomponent from "./components/inputComponent/inputComponent.jsx";

const datosCard = {
  titulo : "Zapas re copadas",
  precio : "45000",
  img : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
}

function App() {

  return (
    <>
      <h1>Crear un componente y compruebe como se usa el children</h1>
      <Card data = {datosCard}>
        <p>Hola esto viene de App por children</p>
      </Card>
      <h1>Crear un componente el cual muestre la variacion de un texto a medida que el usuario va escribiendo en el input</h1>
      <div>
        <Inputcomponent />
      </div>
      <h1>Generar una tabla, la cual va a tener datos precargados y cada registro debe tener un boton que muestre por alert el registro</h1>
    </>
  );
}

export default App;
