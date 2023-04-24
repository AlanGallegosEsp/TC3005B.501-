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

const Tarea = (props) => {

    const estiloTarea = "tarea-contenedor " + (props.completada ? "completada" : "");

    return <div className={estiloTarea}>
        <div className="tarea-texto" onClick={ () => props.completarTarea(props.id)}>{props.texto}</div>
        <div className="tarea-icono" onClick={ () => props.eliminarTarea(props.id)}>
            <MdOutlineDeleteForever />
        </div>
    </div>;
}

export default Tarea;
