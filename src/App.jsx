import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './i18n';
import Navbar from './componentes/Navbar';  
import Inicio from './pags/Inicio';  
import Conciertos from './pags/Conciertos'; 
import Merchan from './pags/Merchan'; 
import Contacto from './pags/Contacto'; 
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar /> 

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />  
            <Route path="/conciertos" element={<Conciertos />} /> 
            <Route path="/merchan" element={<Merchan />} /> 
            <Route path="/contacto" element={<Contacto />} /> 
          </Routes>
        </main>
        
        <footer className="bg-black text-white py-4 border-top">
          <div className="container">
            <div className="row align-items-center text-center text-md-start">

              <div className="col-md-4 mb-3">
                <h2 className="text-secondary fw-bold">LEIZEAK</h2>
              </div>

              <div className="col-md-4 mb-3 d-flex justify-content-center gap-5">
                <a href="https://www.instagram.com/leizeak/?hl=es" target="_blank" rel="noopener noreferrer" className="text-secondary fs-4">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://open.spotify.com/intl-es/artist/3njKVWytc6tOHxlFdw12dk?si=1094YQF7TzOedHKKfZFXvQ" target="_blank" rel="noopener noreferrer" className="text-secondary fs-4">
                  <i className="bi bi-spotify"></i>
                </a>



                <a href="https://www.youtube.com/@leizeaktaldea9731" target="_blank" rel="noopener noreferrer" className="text-secondary fs-4"><i className="bi bi-youtube"></i></a>
              </div>

              <div className="col-md-4 mb-3 justify-content-end gap-4 d-none d-lg-flex">
                <a href="/" className="text-secondary text-decoration-none">{t("menu_inicio")}</a>
                <a href="/conciertos" className="text-secondary text-decoration-none">{t("menu_conciertos")}</a>
                <a href="/merchan" className="text-secondary text-decoration-none">{t("menu_tienda")}</a>
                <a href="/contacto" className="text-secondary text-decoration-none">{t("menu_contacto")}</a>
              </div>

            </div>
          </div>
        </footer>

      </Router>
    </div>
  );
}

export default App;
