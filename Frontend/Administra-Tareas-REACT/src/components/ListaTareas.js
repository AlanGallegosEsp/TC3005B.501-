/**
 * @file ListaTareas.js
 * @brief Componente que muestra una lista de tareas
 * @author Carlos Alan Gallegos Espindola
 * @version 1.0
 * @date 2023-04-17
 *
 */

import { Fragment } from "react";
import { useState } from "react";
import CapturaTarea from "./CapturaTarea";
import Tarea from "./Tarea";

const ListaTareas = (props) => {
    // Arreglo de tareas
    const [arrTareas, setArrTareas] = useState([]);

    const agregarTarea = (tarea) => {
        const arrTareasNuevas = [tarea, ...arrTareas];
        setArrTareas(arrTareasNuevas);
    };

    const completarTarea = (id) => {
        const arrTareasNuevas = arrTareas.map((tarea) => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setArrTareas(arrTareasNuevas);
    };

    const eliminarTarea = (id) => {
        const arrTareasNuevas = arrTareas.filter((tarea) => tarea.id !== id);
        setArrTareas(arrTareasNuevas);
    };

    return (
        <Fragment>
            <CapturaTarea onSubmit={agregarTarea} />
            <div className="lista-tareas">
                {arrTareas.map((tarea) => {
                    return (
                        <Tarea
                            key={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}
                            id={tarea.id}
                        />
                    );
                })}
                {arrTareas.length === 0 && <h1>No hay tareas</h1>}
            </div>
        </Fragment>
    );
};

export default ListaTareas;
