/**
 * @file CapturaTarea.js
 * @brief Componente que capturas una tarea
 * @author Carlos Alan Gallegos Espindola
 * @version 1.0
 * @date 2023-04-17
 *
 */

import "../styles/CapturaTarea.css"

import React from "react";
import { useState, useRef } from "react";
import { useContext } from "react";
import { ContextoTareas } from "../App";
import {v4 as uuidv4} from "uuid";


const CapturaTarea = (props) => {
    // Contexto
    const [ , , agregarTarea] = useContext(ContextoTareas);

    const [descripcionTarea, setDescripcionTarea] = useState("");

    const cambioEntradaHandler = (e) => {
        setDescripcionTarea(e.target.value);
        console.log(descripcionTarea);
    }

    // Hook de referencia
    const refInput = useRef(); // Apunta a un nodo

    const agregarTareaHandle = (e) => {
        e.preventDefault();
        const nuevaTarea = 
        {
            id: uuidv4(),
            texto: descripcionTarea,
            completada: false
        }

        agregarTarea(nuevaTarea);
    };

    return (
        <form className="tarea-forma" onSubmit={agregarTareaHandle}>
            <input 
                ref={refInput}
                className="tarea-input"
                type="text"
                placeholder="Escribe una tarea"
                name="text"
                onChange={cambioEntradaHandler}
            />
            <button className="tarea-boton">Agregar tarea</button>
        </form>
    );
}


export default CapturaTarea;