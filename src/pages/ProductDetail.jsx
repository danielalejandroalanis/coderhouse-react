import React from "react";
import { useParams } from "react-router-dom";
import { CartButtons } from "../components";
import { ProductsData } from '../json';

export const ProductDetail = () => {
  const { productId } = useParams();
  const producto = ProductsData.find((p) => p.id === productId);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="detalle-producto">
      <h1>{producto.nombre}</h1>
      <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
      <p>{producto.descripcion}</p>
      <span className="precio">${producto.precio}</span>
      <CartButtons />
    </div>
  );
};