/**
Construye una aplicación que permita al usuario teclear
el nombre de un país y que muestre su bandera. con el siguiente api
https://restcountries.com/#api-endpoints-v3-name
y muestre la bandera en otra página, ruta.
 */

import { useState, useEffect, useParams } from "react";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";

export function Banderas() {
    const [pais, setPais] = useState("");
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setPais(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/bandera/" + pais);
    };
    
    return (
        <div>
        <h1>Bandera</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Nombre del país"
            onChange={handleChange}
            />
            <button type="submit">Buscar</button>
        </form>
        <Outlet />
        </div>
    );
}

export function Bandera() {
    const { pais } = useParams();
    const [bandera, setBandera] = useState("");
    const [error, setError] = useState("");
    
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/name/" + pais)
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 404) {
            setError(data.message);
            } else {
            setBandera(data[0].flags.png);
            }
        });
    }, [pais]);
    
    if (error) {
        return <h2>{error}</h2>;
    }
    
    return (
        <div>
        <h2>{pais}</h2>
        <img src={bandera} alt={pais} width="300" />
        </div>
    );
}