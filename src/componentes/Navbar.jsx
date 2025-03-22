import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
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
              <Link className="nav-link active" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/conciertos">Conciertos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/merchan">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button className="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-globe"></i> 
          </button>

          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="#">Euskara</a>
            <a className="dropdown-item" href="#">Castellano</a>
            <a className="dropdown-item" href="#">English</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
