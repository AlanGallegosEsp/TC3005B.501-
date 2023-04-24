import './App.css';
import Titulo from './components/titulo';
import Puntos from './components/puntos';
import Boton from './components/boton';
import Marcadores from './components/marcadores';
import Wrapper from './components/wrapper';
import { useState } from 'react';

function App() {

  // Estado para los marcadores
  const[puntosA, setPuntosA] = useState(0);
  const[puntosB, setPuntosB] = useState(0);

  const [setsA, setSetsA] = useState(0);
  const [setsB, setSetsB] = useState(0);

  // Estado para checar repeticion
  const[repeticionA, setRepeticionA] = useState(false);
  const[repeticionB, setRepeticionB] = useState(false);

  // Funciones que atienden el evento onClick de los botones
  const onClickHandlerA = () => {
    if (puntosA < 30) {
      setPuntosA(puntosA + 15)
    } else if (puntosA === 30) {
      setPuntosA(puntosA + 10)
    }
    else {
      if (puntosB != 40 && repeticionB === false) {
        setPuntosA(0);
        setPuntosB(0);
        setSetsA(setsA + 1);
      }
      else if (repeticionA === true && repeticionB === false) {
        setPuntosA(0);
        setPuntosB(0);
        setSetsA(setsA + 1);
        setRepeticionA(false);
      }
      else if (repeticionA === false && repeticionB === true) {
        setRepeticionB(false);
        setPuntosB(40)
    }
      else if (repeticionA === false) {
        setRepeticionA(true)
        setPuntosA("AD")
      }
    }
  }

  const onClickHandlerB = () => {
    if (puntosB < 30) {
      setPuntosB(puntosB + 15)
    } else if (puntosB === 30) {
      setPuntosB(puntosB + 10)
    }
    else {
      if (puntosA != 40 && repeticionA === false) {
        setPuntosA(0);
        setPuntosB(0);
        setSetsB(setsB + 1);
      }
      else if (repeticionB === true && repeticionA === false) {
        setPuntosB(0);
        setPuntosA(0);
        setSetsB(setsB + 1);
        setRepeticionB(false);
      }
      else if (repeticionB === false && repeticionA === true) {
        setRepeticionA(false);
        setPuntosA(40)
    }
      else if (repeticionB === false) {
        setRepeticionB(true)
        setPuntosB("AD")
      }
    }
  }

  const onClickHandlerReiniciar = () => {
    setPuntosA(0);
    setPuntosB(0);
    setSetsA(0);
    setSetsB(0);
  }

  return (
  <div className="App">
    <Wrapper setsA={setsA} setsB={setsB} puntosA={puntosA} puntosB={puntosB} />
    <Boton texto="Punto de A" onClick={onClickHandlerA}/>
    <Boton texto="Punto de B" onClick={onClickHandlerB}/>
    <Boton texto="Reiniciar" onClick={onClickHandlerReiniciar}/>
  </div>
  );
}

export default App;
