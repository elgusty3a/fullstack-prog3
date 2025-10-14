import "./App.css";
import Card from "./components/Card/card.jsx";

const datosCard = {
  titulo : "Zapas re copadas",
  precio : "45000",
  img : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
}

function App() {

  return (
    <>
      <Card data = {datosCard}>
        <p>Hola esto viene de App por children</p>
      </Card>
    </>
  );
}

export default App;
