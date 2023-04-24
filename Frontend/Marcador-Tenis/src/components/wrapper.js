// Author Carlos A. Gallegos
// Date 2023-04-11
// Description: This file to wrap the application	

import Boton from "./boton";
import Marcadores from "./marcadores";
import Puntos from "./puntos";
import Titulo from "./titulo";

import "../styles/wrapper.css";

const Wrapper = (props) => {
    return (
        <div className="wrapper">
            <div className="Sets">
                <Titulo texto="Set A" />
                <Marcadores valor={props.setsA} />
                <Titulo texto="Set B" />
                <Marcadores valor={props.setsB} />
            </div>

            <div className="Jugadores">
                <Titulo texto="Jugador A" />
                <Puntos valor={props.puntosA} />
                <Titulo texto="Jugador B" />
                <Puntos valor={props.puntosB} />
            </div>
        </div>
    );
}

export default Wrapper;