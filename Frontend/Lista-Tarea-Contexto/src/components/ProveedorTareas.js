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
    const [tareas, setTareas] = useState([]);

    return (   
        <ContextoTareas.Provider value={ [ tareas, setTareas ] }>
            {children}
        </ContextoTareas.Provider>
    );
};

export default ProveedorTareas;