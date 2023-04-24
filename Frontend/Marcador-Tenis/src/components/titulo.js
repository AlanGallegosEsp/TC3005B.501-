// Author: Carlos Alan Gallegos Espindola
// Date: 2023-04-10
// Description: Componente de titulo

import "../styles/titulo.css"

const Titulo = (props) => {
    return (
        <div className="titulo-tenis">
            {props.texto}
        </div>
    );
}

export default Titulo;