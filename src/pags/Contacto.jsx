import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

function Contacto() {
  const { t } = useTranslation();
  const [estilo, setEstilo] = useState({ width: "85%", height: "80%" });
  const form = useRef();

  {/* Cuando la pantalla es pequeña se cambia el estilo del formulario para que ocupe más a lo ancho */}
  const updateSize = () => {
    if (window.innerWidth >= 992) { //lg
      setEstilo({ width: "35%", height: "80%" });
    } else {
      setEstilo({ width: "90%", height: "85%" });
    }
  };

  {/* Cuando el tamaño de la página cambia, se reajusta el tamaño del formulario  */}
  useEffect(() => {
    updateSize(); 
    window.addEventListener("resize", updateSize); 
    return () => window.removeEventListener("resize", updateSize); 
  }, []);

  {/* Estilo de los campos del formulario */}
  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid white",
    color: "white",
    padding: "8px 0",
    outline: "none"
  };

  {/* Función para enviar email */}
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8z8dk24", "template_9iiue4v", form.current, "Q-vcWUCk30gOMGG8P")
      .then(
        (result) => {
          alert("Correo enviado exitosamente");
          console.log(result.text);
        },
        (error) => {
          alert("Error al enviar el correo");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container-fluid p-0 position-relative vh-100 " >

      {/* Imagen de fondo */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <img src="\imgs\pag_contacto.jpg" alt={t("contacto_fondo_alt")} className="background-image w-100 h-100 object-fit-cover" />
      </div>

      
      <div className="w-100 h-100 d-flex justify-content-center align-items-center" style={{ gap: '130px' }}>


        {/* Apartado de información de contacto y redes sociales */}
        <div className="bg-black text-white opacity-75 rounded-4 p-5 d-flex flex-column d-none d-lg-block" style={{ width: '35%', height: '80%' }}>

          {/* Sección de información */}
          <div className="row h-75 mb-5">  
            <h4 className="fw-bold mb-2 fs-2">{t("contacto_titulo1")}</h4>

            {/* Email */}
            <div className="row mb-4 d-flex align-items-center">
              <div className="col-2 d-flex justify-content-center align-items-center ">
                <i className="bi bi-envelope-at fs-2"></i>
              </div>
              <div className="col-10">
                <p className="fs-3 fw-bold mb-4">{t("contacto_info1")}</p>
                <p className="lead fs-5">leizeaktaldea@gmail.com</p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="row mb-5 d-flex align-items-center">
              <div className="col-2 d-flex justify-content-center align-items-center ">
                <i className="bi bi-telephone fs-2"></i>
              </div>
              <div className="col-10">
                <p className="fs-3 fw-bold mb-4">{t("contacto_info2")}</p>
                <p className="lead fs-5">666 666 666</p>
              </div>
            </div>
          </div>

          {/* Sección de redes sociales */}
          <div className="row h-25 d-flex ">
            <div className="col-12">
              <h5 className="fw-bold mb-4 fs-2">{t("contacto_titulo2")}</h5>
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
                  <a href="https://open.spotify.com/intl-es/artist/3njKVWytc6tOHxlFdw12dk?si=1094YQF7TzOedHKKfZFXvQ" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-spotify fs-1" style={{ color: 'white' }}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-black opacity-75 rounded-4 p-3 p-lg-5" style={estilo}>
          <form className="d-flex flex-column" ref={form} onSubmit={sendEmail}>
            {/* Nombre */}
            <label htmlFor="nombre" className="text-white mb-lg-1">{t("contacto_form_lbl_1")} *</label>
            <input type="text" id="nombre" name="name" className="mb-2 mb-lg-5" required style={inputStyle} />

            {/* Email */}
            <label htmlFor="email" className="text-white mb-lg-1">{t("contacto_form_lbl_2")} *</label>
            <input type="email" id="email" name="email" className="mb-2 mb-lg-5" required style={inputStyle} />

            {/* Asunto */}
            <label htmlFor="asunto" className="text-white mb-lg-1">{t("contacto_form_lbl_3")} *</label>
            <input type="text" id="asunto" name="title" className="mb-2 mb-lg-5" required style={inputStyle} />

            {/* Mensaje */}
            <label htmlFor="mensaje" className="text-white mb-1 mb-lg-3">{t("contacto_form_lbl_4")} *</label>
            <textarea id="mensaje" name="message" className="bg-white color-black opacity-5 mb-2 mb-lg-4 rounded-2 p-2" required rows="7" style={{ resize: "none", border: "none", outline: "none"}}></textarea>

            {/* Botón de enviar */}
            <button type="submit" className='rounded-2 p-2'>{t("contacto_form_enviar")}</button>
          </form>

        </div>

      </div>
    </div>
  );
}

export default Contacto;