// Author: Carlos A. Gallegos
// Date: 2020-04-03
// Description: Fecha component
import "../styles/fecha.css"

const Fecha = (props) => {

    const anio = props.fecha.getFullYear();
    const mes = props.fecha.toLocaleString('en-US', { month: 'long' });
    const dia = props.fecha.toLocaleString('en-US', { day: '2-digit' });

    return (
        <div className="fecha">
            <div className="fecha_anio">{anio}</div>
            <div className="fecha_mes">{mes}</div>
            <div className="fecha_dia">{dia}</div>
        </div>
    )
}

export default Fecha