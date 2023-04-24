import './App.css';

import { createContext } from 'react';
import ListaTareas from './components/ListaTareas';
import ProveedorTareas from './components/ProveedorTareas';

export const ContextoTareas = createContext()

function App() {
  return (
    <div className="App">
      <ProveedorTareas>
          <ListaTareas/>
      </ProveedorTareas>
    </div>
  );
}

export default App;
