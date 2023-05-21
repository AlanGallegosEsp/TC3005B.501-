/**
 * @author AlanGallegosEsp
 * @description Componente principal de la aplicación
 * @version 1.0
 * @date 5/21/2023
 */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, About, Products, Events, Contact, Error404, Services, History} from './Components/Paginas';
import { Bandera, BanderaPais } from './Components/Bandera';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
          <Route path="services" element={<Services />} />
          <Route path="history" element={<History />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404/>} />

        <Route path="/bandera" element={<Bandera />} />
        <Route path="/:pais" element={<BanderaPais />} />

        

      </Routes>
    </div>
  );
}

export default App;
