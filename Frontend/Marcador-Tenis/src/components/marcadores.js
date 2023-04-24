// Author: Carlos Alan Gallegos Espindola
// Date: 2023-04-10
// Description: Componente de puntos

import "../styles/marcadores.css";

const Marcadores = (props) => {
    return(
        <div className="puntos-sets">
            {props.valor}
        </div>
    )
};

export default Marcadores;