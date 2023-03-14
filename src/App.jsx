import React from "react";
//Componentes
import { MainLayout } from "./layouts";
import { PokemonCard } from "./components";
//Estilos
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";

const promesaPokemon = new Promise((resolve, reject) => {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=20";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});


function App() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    promesaPokemon
      .then((data) => {
        setLoading(true);
        setData(data.results);
        console.log(data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        setLoading(false);
      });
  });

//   const datos = [
//     { id: 1, name: "a", description: "pelota", stock: 2 },
//     { id: 2, name: "b", description: "paleta", stock: 2 }
// ]

  return (
    <MainLayout>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className={styles.pokemonContainer}>
            {data.map((pokemon, index) => {
              return <PokemonCard pokemon={pokemon} index={index} />;
            })}
          </div>
          // <div>
          //   {
          //     datos.map(dato => {
          //       return (
          //         <div key={dato.id}>
          //           <span>Nombre: {dato.name}</span> 
          //           <br />
          //           <span>Descricion: {dato.description}</span>
          //           <br />

          //           <span>Stock: {dato.stock}</span>
          //         </div>
          //       )
          //     })
          //   }
          // </div>
        )}
    </MainLayout>
  );
}

export default App;
