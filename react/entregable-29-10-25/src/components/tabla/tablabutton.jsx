import React from 'react'

function Tablabutton(props) {
	const handleButton = () => {
		props.handleClick(props.datos)
	}
	return (
		<div>
			<button onClick={handleButton} className="btn btn-error">Borrar</button>
		</div>
	)
}

export default Tablabutton