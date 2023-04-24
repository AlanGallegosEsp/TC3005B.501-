import './App.css';
import Title from './components/title';
import Fecha from './components/fecha';
import Registro from './components/registro';
import Imagen from './components/imagen';

function App() {
  return (
    <div className="App">
        <Title texto="Covid-19"/>
        <Registro
          registro={{
            fecha: new Date(2023, 2, 17),
            titulo: "Contagios",
            cantidad: 2500,
          }}
        />
        <Imagen />
    </div>
  );
}

export default App;
