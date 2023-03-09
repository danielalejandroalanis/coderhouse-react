import React, {useState, useEffect} from "react";
import styles from "./App.module.css";
import { ButtonComponent } from "./components";
import { MainLayout } from "./layouts";
function App() {

  const isBlue = false;

  // const [contador, setContador] = React.useState(0);
  const [contador, setContador] = useState(0);
  const [contadorDos, setContadorDos] = useState(1);

  const addContador = () => {
    setContador(contador + 1)
  }
  const addContadorDos = () => {
    setContadorDos(contadorDos + 1)
  }

  // React.useEffect(() => {
    // loquesea
  // }, [])

  useEffect(() => {
    console.log(`Contador 2 ahora vale:${contadorDos}`)
    console.log(`Contador 1 ahora vale:${contador}`)

    return () => {
      setContador(0)
      setContadorDos(1)
    }

  }, [contadorDos, contador])

  
  console.log("Will mount")


  return (
    <MainLayout>
      <div className={isBlue ? styles.blue : styles.customClass}>
        <p>Bienvenidos a React!</p>
        <ButtonComponent clickEvent={() => console.log("boton primario")} />
        <ButtonComponent
          label="Boton Secundario"
          clickEvent={() => console.log("boton secundario")}
        />
        <ButtonComponent
          label="Boton terciario"
          clickEvent={() => console.log("boton terciario")}
        />
        <ButtonComponent
          label="Boton 4"
          clickEvent={() => console.log("boton 4")}
        />

        <div style={{ paddingLeft: "30px" }}>
          <div>{contador}</div>
          <button onClick={addContador}>+1</button>
          <div>{contadorDos}</div>
          <button onClick={addContadorDos}>+1</button>
          {/* <button onClick={() => setContador(contador + 1)}>+1</button> */}

        </div>
      </div>
    </MainLayout>
  );
}

export default App;
