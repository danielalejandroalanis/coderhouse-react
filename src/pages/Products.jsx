import React from "react";
import axios from "axios";
import { Card, Loader } from "../components";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { NewProductComponent } from "../components/NewProduct/NewProductComponent";

export const Products = () => {
  const [productsData, setProductsData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "products");
    getDocs(itemsCollection)
      .then((products) => {
        if (products.length === 0) {
          console.log("No products");
        }

        setProductsData(
          products.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((err) => console.log(err))
      .then(() => {
        setLoading(false);
      });
  }, []);
  const handleNewProduct = () => {
    setLoading(true);
    const newProduct = {
      activo: true,
      descripcion: "Zapatillas blancas chardidas",
      imagen: "https://ejemplo.com/imagen2.jpg",
      nombre: "Zapatillas chardidas",
      stock: 5,
    };
    const db = getFirestore();
    const productCollection = collection(db, "products");

    addDoc(productCollection, newProduct)
      .then(({ id }) => console.log(id))
      .catch((err) => console.log(err))
      .then(() => setLoading(false));
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="productos">
      {productsData.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
      <div>
        <NewProductComponent onClick={handleNewProduct} />
      </div>
    </div>
  );
};
