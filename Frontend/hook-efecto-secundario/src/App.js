import './App.css';
import {useEffect} from 'react';
import Timer from './components/Timer';
import Marcadores from './components/Marcadores';

function App() {
  useEffect ( () => {
    console.log('Despues de renderizar');
  }, []);

  return (
    <div className="App">
      {console.log('Renderizando')}
      Hola Mundo

      <Timer />
      <Marcadores />
    </div>
  );

}

export default App;
