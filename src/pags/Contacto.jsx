import React from 'react';
import { useTranslation } from "react-i18next";

function Contacto() {
  const { t } = useTranslation();

  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid white",
    color: "white",
    padding: "8px 0",
    outline: "none"
  };

  return (
    <div className="container-fluid p-0 position-relative vh-100 " >

      {/* Imagen de fondo */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <img src="\imgs\pag_contacto.jpg" alt="Foto de las integrantes del grupo" className="background-image w-100 h-100 object-fit-cover" />
      </div>

      
      <div className="w-100 h-100 d-flex justify-content-center align-items-center" style={{ gap: '130px' }}>


        {/* Apartado de información de contacto y redes sociales */}
        <div className="bg-black text-white opacity-75 rounded-4 p-5 d-flex flex-column" style={{ width: '35%', height: '80%' }}>

          {/* Sección de información */}
          <div className="row h-75 mb-5">  
            <h4 className="fw-bold mb-2 fs-2">{t("contacto_titulo_1")}</h4>

            {/* Email */}
            <div className="row mb-4 d-flex align-items-center">
              <div className="col-2 d-flex justify-content-center align-items-center ">
                <i className="bi bi-envelope-at fs-2"></i>
              </div>
              <div className="col-10">
                <p className="fs-3 fw-bold mb-4">Email</p>
                <p className="lead fs-5">leizeaktaldea@gmail.com</p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="row mb-5 d-flex align-items-center">
              <div className="col-2 d-flex justify-content-center align-items-center ">
                <i className="bi bi-telephone fs-2"></i>
              </div>
              <div className="col-10">
                <p className="fs-3 fw-bold mb-4">Teléfono</p>
                <p className="lead fs-5">666 666 666</p>
              </div>
            </div>
          </div>

          {/* Sección de redes sociales */}
          <div className="row h-25 d-flex ">
            <div className="col-12">
              <h5 className="fw-bold mb-4 fs-2">Síguenos</h5>
              <div className="d-flex gap-3 mb-4">
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <a href="https://www.instagram.com/leizeak/?hl=es" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram fs-1" style={{ color: 'white' }}></i>
                  </a>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <a href="https://www.youtube.com/@leizeaktaldea9731" target="_blank">
                    <i className="bi bi-youtube fs-1" style={{ color: 'white' }}></i>
                  </a>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <a href="https://www.facebook.com/Leizeak/?locale=es_ES" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook fs-1" style={{ color: 'white' }}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-black opacity-75 rounded-4 p-5" style={{ width: '35%', height: '80%' }}>
          <form className="d-flex flex-column">
            {/* Nombre */}
            <label htmlFor="nombre" className="text-white mb-1">Nombre *</label>
            <input type="text" id="nombre" className="mb-5" required style={inputStyle}/>

            {/* Email */}
            <label htmlFor="email" className="text-white mb-1">Email *</label>
            <input type="text" id="email" className="mb-5" required style={inputStyle}/>

            {/* Asunto */}
            <label htmlFor="asunto" className="text-white mb-1">Asunto *</label>
            <input type="text" id="asunto" className="mb-5" required style={inputStyle}/>

            {/* Mensaje */}
            <label htmlFor="mensaje" className="text-white mb-3">Mensaje *</label>
            <textarea id="mensaje" className="bg-white color-black opacity-5 mb-4 rounded-2 p-2" required rows="7" style={{ resize: "none", border: "none", outline: "none"}}></textarea>

            {/* Botón de enviar */}
            <button type="submit" className='rounded-2 p-2'>ENVIAR</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contacto;