import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, About, Products, Events, Contact, Error404, Services, History} from './Components/Paginas';
import { Banderas } from './Components/Banderas';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Banderas />} />
        <Route path="/about" element={<About />} >
          <Route path="services" element={<Services />} />
          <Route path="history" element={<History />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404/>} />

        <Route path="/bandera" element={<Banderas />} />

      </Routes>
    </div>
  );
}

export default App;
