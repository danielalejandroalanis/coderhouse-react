import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const FormNewProduct = () => {
  const [objeto, setObjeto] = useState({
    activo: false,
    descripcion: "",
    imagen: "",
    nombre: "",
    stock: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setObjeto((prevObjeto) => ({ ...prevObjeto, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getFirestore();
    const productCollection = collection(db, "products");
    addDoc(productCollection, objeto).then(({ id }) => console.log(id));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="activo">Activo:</label>
        <input
          type="checkbox"
          id="activo"
          name="activo"
          checked={objeto.activo}
          onChange={() =>
            setObjeto((prevObjeto) => ({
              ...prevObjeto,
              activo: !prevObjeto.activo,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="descripcion">Descripción:</label>
        <input
          type="text"
          id="descripcion"
          name="descripcion"
          value={objeto.descripcion}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="imagen">Imagen:</label>
        <input
          type="text"
          id="imagen"
          name="imagen"
          value={objeto.imagen}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={objeto.nombre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={objeto.stock}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Subir objeto</button>
    </form>
  );
};
