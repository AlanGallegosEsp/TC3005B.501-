import {useEffect, useState} from 'react';

const Marcadores = () => {
    const [contadorA, setContadorA] = useState(0);
    const [contadorB, setContadorB] = useState(0);

    useEffect(() => {
        console.log('Efecto secundario sin dependencias');
    }); 


    useEffect(() => {
        console.log('Efecto secundario');
    });

    useEffect(() => {
        console.log('Efecto secundario [contadorA]');
    }, [contadorA]);

    useEffect(() => {
        console.log('Efecto secundario {contadorB]');
    }, [contadorB]);

    useEffect(() => {
        console.log('Efecto secundario [contadorA, contadorB]');
    }, [contadorA, contadorB]);


    return (
        <div>
            <h1>Contador A: {contadorA}</h1>
            <button onClick={() => setContadorA(contadorA + 1)}>Aumentar A</button>
            <h1>Contador B: {contadorB}</h1>
            <button onClick={() => setContadorB(contadorB + 1)}>Aumentar B</button>
        </div>
    );
}

export default Marcadores;