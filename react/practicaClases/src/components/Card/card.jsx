import React from "react";

function Card({data, children }) {
  const {titulo, precio, img} = data;
  return (
    <div>
      {children}
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{titulo}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <h2>Precio: ${precio}</h2>
          <div className="card-actions">
            <button className="btn btn-primary">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
