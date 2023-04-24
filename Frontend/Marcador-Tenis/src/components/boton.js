// Author: Carlos Alan Gallegos Espindola
// Date: 2023-04-10
// Description: Componente de botones

import "../styles/boton.css";

const Boton = (props) => {
    return (
    <button className="boton-tenis" onClick={props.onClick}>
    {props.texto}
    </button>
    );
};

export default Boton;