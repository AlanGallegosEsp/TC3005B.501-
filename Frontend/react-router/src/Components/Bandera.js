/**
 * @author AlanGallegosEsp
 * @description Componente que muestra la bandera de un país
 * @version 1.0
 * @date 5/21/2023
 */

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const Bandera = () => {
  const [pais, setPais] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPais(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `/${pais}`;
    navigate(url);
  }

  return (
    <div>
      <h1>Bandera</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Buscar</button>
        <br />
        <Link to="/">Volver</Link>
      </form>
    </div>
  );
}

export const BanderaPais = () => {
  const { pais } = useParams();
  const [bandera, setBandera] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = `https://restcountries.com/v3/name/${pais}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setBandera(data[0].flags[0]);
        } else {
          setError(true);
        }
      })
      .catch(error => {
        setError(true);
      });
  }, [pais]);

  return (
    <div>
      <h1>Bandera de {pais}</h1>
      {error ? (
        <h1>El país no existe o esta en otro idioma</h1>
      ) : (
        <img src={bandera} alt={pais} />
      )}
      <br />
      <Link to="/bandera">Volver</Link>
    </div>
  );
}
