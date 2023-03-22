import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
export const Card = ({ producto }) => {
  return (
    <Link to={`/products/${producto.id}`} className="card-link">
      <div className="card">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">{producto.descripcion}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Agregar al carrito</button>
          <span className="precio">${producto.precio}</span>
        </div>
      </div>
    </Link>
  );
};
