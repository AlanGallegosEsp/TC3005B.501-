// Author: Carlos Alan Gallegos Espindola
// Date: 2023-04-10
// Description: Componente de puntos

import "../styles/puntos.css";

const Puntos = (props) => {
    return(
        <div className="puntos-tenis">
            {props.valor}
        </div>
    )
};

export default Puntos;