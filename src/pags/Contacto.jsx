import React from 'react';

function Contacto() {
  return (
    <div className="container mt-5">
      <div className="row">
        
        {/* Formulario */}
        <div className="col-md-6">
          <h2 className="mb-4">Contáctanos</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="email" placeholder="Tu email" />
            </div>
            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">Mensaje</label>
              <textarea className="form-control" id="mensaje" rows="4" placeholder="Escribe tu mensaje aquí"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>

        {/* Tarjetas de contacto */}
        <div className="col-md-6">
          <h2 className="mb-4">Información de contacto</h2>

          {/* Tarjeta correo */}
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Correo electrónico</h5>
              <p className="card-text">leizeaktaldea@gmail.com</p>
            </div>
          </div>

          {/* Tarjeta teléfono */}
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Teléfono</h5>
              <p className="card-text">666 666 666</p>
            </div>
          </div>

          {/* Tarjeta redes sociales */}
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Redes sociales</h5>
              <p className="card-text">icono instagram, youtube..</p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Contacto;
