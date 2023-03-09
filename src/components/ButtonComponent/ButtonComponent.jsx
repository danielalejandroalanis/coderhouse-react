import React from "react";

export const ButtonComponent = ({clickEvent, label = "Boton default"}) => {

    return (
        <button onClick={clickEvent}>{label}</button>
    );
}