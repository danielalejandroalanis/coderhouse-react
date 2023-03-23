import React from "react";
import { Link } from "react-router-dom";
import { CartButtons } from "../";
import { useNavigate } from "react-router-dom";

import "./Card.css";
export const Card = ({ producto }) => {
  const navigate = useNavigate();

  const handleNavigateProduct = () => {
    navigate(`/products/${producto.id}`)
  }
  const handleGoBack = () => {
    navigate(-1)
  }
  return (
    <div className="card">
      {/* <Link to={`/products/${producto.id}`} className="card-link">
     
        </Link> */}
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
      <button onClick={handleNavigateProduct}>Ir a detalles</button>
      <button onClick={handleGoBack}>Volver atras</button>

      <CartButtons />
    </div>
  );
};
