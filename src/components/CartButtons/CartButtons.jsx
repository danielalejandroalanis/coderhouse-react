import React from "react";

export const CartButtons = () => {
  const [state, setState] = React.useState(1);

  const handleMoreClick = () => {
    if (state === 5) return;
    setState(state + 1);
  };
  const handleLessClick = () => {
    if (state === 1) return;
    setState(state - 1);
  };

  const handleOnChange = (e) => {
    console.log(e.target.id)
    console.log(e.target.value)

  }

  
  
  return (
    <>
      <div>{state}</div>
      <button onClick={handleLessClick}>Agregar -</button>
      <input onChange={handleOnChange} id="valueInput" placeholder="Cantidad custom" />
      <button onClick={handleMoreClick}>Agregar +</button>
      <button>Agrega al Carrito</button>
    </>
  );
};
