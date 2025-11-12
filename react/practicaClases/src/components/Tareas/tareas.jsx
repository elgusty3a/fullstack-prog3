import React from 'react'

function Tareas() {

  
  return (
    <div>
      <div>
        <h1>Crear Tarea</h1>
        <form>
          <input type="text" placeholder="Título de la tarea" />
          <br />
          <textarea placeholder="Descripción de la tarea"></textarea>
          <br />
          <button type="submit">Agregar</button>
        </form>
      </div>
      <h1>Lista de tareas pendientes</h1>
    </div>
  )
}

export default Tareas