import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';  
import Inicio from './pags/Inicio';  
import Conciertos from './pags/Conciertos'; 
import Merchan from './pags/Merchan'; 
import Contacto from './pags/Contacto'; 

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Inicio />} />  
        <Route path="/conciertos" element={<Conciertos />} /> 
        <Route path="/merchan" element={<Merchan />} /> 
        <Route path="/contacto" element={<Contacto />} /> 
      </Routes>
    </Router>
  );
}

export default App;
