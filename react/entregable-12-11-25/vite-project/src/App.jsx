
import './App.css'
import Form3 from './components/Forms/formEj3'
import Tareas from './components/Tareas/tareas'

function App() {
  
  return (
    <>
      <h2> 3 - Mediante un formulario, se deberá capturar Usuario y contraseña y persistir los datos en localstorage</h2>
      <div>
        <Form3 />
      </div>
      <br />
      <h2>5 - Se deberá realizar un listado de tareas el cual se deberá mostrar en una tabla las tareas precargadas. Se podrá agregar y eliminar tareas a gusto del usuario.</h2>
      <div>
        <Tareas />
      </div>
    </>
  )
}

export default App
