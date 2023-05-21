/**
 * @file ListaTareas.js
 * @brief Componente que muestra una lista de tareas y permite agregar nuevas tareas a la lista de tareas
 * @author Carlos Alan Gallegos Espindola
 * @version 2.0
 * @date 2023-04-26
*/

import "../styles/ListaTareas.css";

import { Fragment, useState } from "react";
import CapturaTarea from "./CapturaTarea";
import {MdAdd, MdClear} from "react-icons/md";
import Tarea from "./Tarea";

const ListaTareas = (props) => {
    const [arrTareas, setArrTareas] = useState([]);
    const [showCapturaTarea, setShowCapturaTarea] = useState(false);

    const agregarTarea = (tarea) => {
        if (tarea.texto !== "") {
            const arrTareasNuevas = [tarea, ...arrTareas];
            setArrTareas(arrTareasNuevas);
        }
        else{
            alert("No puede estar vacio");
        }


    };

    const apiTareas = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();

        const arrTareasNuevas = data.map((tarea) => {
            return {
                id: tarea.id,
                texto: tarea.title,
                completada: tarea.completed,
            };
        }
        );
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

    const toggleCapturaTarea = () => {
        setShowCapturaTarea(!showCapturaTarea);
    };

    return (
        <Fragment>
            <button onClick={toggleCapturaTarea} className="toggle-button" >{showCapturaTarea ? <MdClear/> : <MdAdd/> }</button>
            {showCapturaTarea && <CapturaTarea onSubmit={agregarTarea} />}

            <button onClick={apiTareas} className="toggle-button" id="apiTareas">Api Tareas</button>
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
