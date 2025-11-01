import React from 'react'

function Tablabutton({ datos }) {
	const handleButton = () => {
		alert(`Mis datos son: ${datos.id}, ${datos.nombre}, ${datos.job}, ${datos.color}`);
	}
	return (
		<div>
			<button onClick={handleButton} className="btn btn-info">Info</button>
		</div>
	)
}

export default Tablabutton