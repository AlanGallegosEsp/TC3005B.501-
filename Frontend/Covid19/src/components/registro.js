// Author: Carlos A. Gallegos
// Date: 2020-04-03
// Description: Fecha component

import Fecha from "./fecha"
import "../styles/registro.css"

const Registro = (props) => {
    return (
        <div className="registro">
            <Fecha fecha={props.registro.fecha}/>
            <div className="registro-descripcion">
                <h2>{props.registro.titulo}</h2>
            </div>
            <div className="registro-contagios">
            {props.registro.cantidad}
            </div>
        </div>
    );
};

export default Registro