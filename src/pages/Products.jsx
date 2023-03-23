import React from "react";
import { ProductsData } from "../json";
import { Card } from "../components";
export const Products = () => {
  return (
    <div className="productos">
      {ProductsData.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
