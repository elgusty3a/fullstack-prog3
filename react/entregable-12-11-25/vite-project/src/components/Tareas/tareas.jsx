import { useState } from "react";

function Tareas() {
  const [tareas, setTareas] = useState([
    {
      index: 1,
      titulo: "Estudiar React",
      descripcion: "Ver Formularios y Hooks",
    },
    {
      index: 2,
      titulo: "Estudiar JavaScript",
      descripcion: "Repasar Funciones y Arrays",
    }
  ]);

  const [tareaNueva, setTareaNueva] = useState();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTareaNueva({ ...tareaNueva, [name]: value });
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setTareas([...tareas, { ...tareaNueva, index: tareas.length + 1 }]);
  };

  const handleDelete = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  const renderTareas = () => {
    return tareas.map((tarea, index) => (
      <div key={index}>
        <li>
          <p>{tarea.index}</p>
          <h3>{tarea.titulo}</h3>
          <p>{tarea.descripcion}</p>
          <button type="button" onClick={() => handleDelete(index)}>
            Eliminar
          </button>
        </li>
      </div>
    ));
  };

  return (
    <div>
      <div>
        <h1>Crear Tarea</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="titulo"
            placeholder="Título de la tarea"
            onChange={handleOnChange}
          />
          <br />
          <textarea
            name="descripcion"
            placeholder="Descripción de la tarea"
            onChange={handleOnChange}
          ></textarea>
          <br />
          <button type="submit">Agregar</button>
        </form>
      </div>
      <h1>Lista de tareas pendientes</h1>
      <ul>
        {tareas.length > 0 ? renderTareas() : <li>No hay tareas pendientes</li>}
      </ul>
    </div>
  );
}

export default Tareas;
