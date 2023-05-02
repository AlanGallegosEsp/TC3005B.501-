/**
 * @file ProveedorTareas.js
 * @brief Componente que provee el contexto de tareas
 * @author Carlos Alan Gallegos Espindola
 * @version 1.0
 * @date 2023-04-24
 * 
 */

import {useState } from 'react';
import { ContextoTareas } from '../App';

const ProveedorTareas = ({ children }) => {
    // Estado compartir
    const [tareas, setTareas] = useState([])

    const agregarTarea = (tarea) => {
        setTareas([...tareas, tarea]);
    }

    const completarTarea = (id) => {
        const nuevaTarea = tareas.map((tarea) => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(nuevaTarea);
    }

    const eliminarTarea = (id) => {
        const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
        setTareas(nuevasTareas);
    }

    return (   
        <ContextoTareas.Provider 
        value={ [ tareas, setTareas, agregarTarea, completarTarea, eliminarTarea] }>
            {children}
        </ContextoTareas.Provider>
    );
};

export default ProveedorTareas;