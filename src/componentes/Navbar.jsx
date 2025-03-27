import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { i18n } = useTranslation();
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng); // Guardar idioma seleccionado
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">LEIZEAK</span>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto"> {/* 'mx-auto' centra los botones */}
           
            <li className="nav-item">
              <Link className={`nav-link me-3 ${location.pathname === "/" ? "active" : ""}`} to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link me-3 ${location.pathname === "/conciertos" ? "active" : ""}`} to="/conciertos">Conciertos</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link me-3 ${location.pathname === "/merchan" ? "active" : ""}`} to="/merchan">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link me-3 ${location.pathname === "/contacto" ? "active" : ""}`} to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button className="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-globe"></i> 
          </button>

          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" onClick={() => changeLanguage("eu")}>Euskara</a>
            <a className="dropdown-item" onClick={() => changeLanguage("es")}>Castellano</a>
            <a className="dropdown-item" onClick={() => changeLanguage("en")}>English</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
