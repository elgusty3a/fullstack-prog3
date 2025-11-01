import React from 'react'
import Tablabutton from './tablabutton'

const datosTabla = [
  {
    id: 1,
    nombre: "Cy Ganderton",
    job: "Quality Control Specialist",
    color: "Blue"
  },
  {
    id: 2,
    nombre: "Hart Hagerty",
    job: "Desktop Support Technician",
    color: "Purple"
  },
  {
    id: 3,
    nombre: "Brice Swyre",
    job: "Tax Accountant",
    color: "Red"
  }];

function Tabla() {

  const renderData = datosTabla.map(dato => {
      return (
          <tr key={dato.id}>
            <th>{dato.id}</th>
            <th>{dato.nombre}</th>
            <th>{dato.job}</th>
            <th>{dato.color}</th>
            <td><Tablabutton datos={dato} /></td>
          </tr>
      )
    })

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {renderData}
        </tbody>
      </table>
    </div>
  )
}

export default Tabla