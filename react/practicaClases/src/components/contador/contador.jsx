import React, { useEffect, useState } from 'react'

function Contador() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
      setCount(count + 1)
  }
  useEffect(() => {
  }, [count]);
  return (
    <div>
      <h1>
        Contador
      </h1>
      <button onClick={count < 10 ? handleClick : ()=>{}} className="btn btn-soft btn-success">+</button>
      <p>{count != 10 ? `Cantidad: ${count}` : `¡Llegaste a ${count}`}</p>
    </div>
  )
}

export default Contador