/**
 * @file Tarea.js
 * @brief Componente que muestra una tarea
 * @author Carlos Alan Gallegos Espindola
 * @version 1.0
 * @date 2023-04-17
 *
 */
import "../styles/Tarea.css"
import {MdOutlineDeleteForever} from "react-icons/md";


import React from "react";
import { useContext } from "react";

import { ContextoTareas } from "../App";

const Tarea = (props) => {

    const [ , , , completarTarea , eliminarTarea] = useContext(ContextoTareas);

    const estiloTarea = "tarea-contenedor " + (props.completada ? "completada" : "");

    return <div className={estiloTarea}>
        <div className="tarea-texto" onClick={ () => completarTarea(props.id)}>{props.texto}</div>
        <div className="tarea-icono" onClick={ () => eliminarTarea(props.id)}>
            <MdOutlineDeleteForever />
        </div>
    </div>;
}

export default Tarea;
