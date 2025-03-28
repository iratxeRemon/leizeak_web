import React from 'react';
import CancionCard from '../componentes/CancionCard'; 
import { useTranslation } from "react-i18next";

function Inicio() {
  const { t } = useTranslation();

  return (
    <>
      <style>
        {`
          .video-card:hover {
            transform: scale(1.01);
          }

          .concierto {
            transition: all 0.3s ease;
            
          }

          .concierto:hover {
            background-color: rgba(255, 255, 255, 0.1) !important;
            border-left: 3px solid #865709;
            transform: translateX(5px);
          }
        `}
      </style>

      <section className="position-relative vh-100 d-flex align-items-center bg-black text-white">
        <div className="position-absolute top-0 start-0 w-100 h-75">
          <img 
            src="/imgs/fondo.jpg" alt="LEIZEAK en concierto" 
            className="w-100 h-100 object-fit-cover opacity-75" style={{ objectPosition: 'center' }}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)' }}></div>
        </div>
        
        <div className="container z-1">
          <div className="row justify-content-center text-center">
            <div className="col-8">
              <img src="/imgs/logo_blanco_2.png" alt="Logo de leizeak" className="w-75 h-40 pacity-100 mb-5" style={{ marginTop: '-350px' }} />
              <h2 className="display-5 mb-4">{t("disco")}</h2>
              
              <div className="text-center mt-5">
                <a href='#nuestraMusica'>
                <button className="btn btn-outline-light btn-lg">
                <i className="bi bi-play-fill me-2"></i>
                  {t("inicio_escucharAhora")}
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="position-absolute bottom-0 w-100 text-center mb-4 d-flex flex-column">
        
        <i className="bi bi-chevron-down fs-1 text-danger mt-0 mb-5"></i>
      </div>

      {/* SECCIÓN NUESTRA MÚSICA */}
      <section id='nuestraMusica' className="bg-black">
        <div className="container py-5">
          <h2 className="display-4 fw-bold text-center mb-5 text-white">{t("inicio_titulo1")}</h2>
          
          {/* CANCIONES DE YOUTUBE */}
          <div className="row text-white">
            <div className="col-md-6">
              <div className="video-card">
                <div className="ratio ratio-16x9 rounded overflow-hidden mb-3 shadow">
                  <CancionCard url={"https://www.youtube.com/embed/rZWUMpBWUe0?si=A2-P_aVt5CN7TXOn"}/>
                </div>
                <h3 className="fw-semibold mb-2">Leizeak - Ez da soinurik</h3>
                <p className="text-secondary">{t("inicio_descripcion1")} • 2022</p>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="video-card ">
                <div className="ratio ratio-16x9 rounded overflow-hidden mb-3 shadow">
                  <CancionCard url={"https://www.youtube.com/embed/690Slph2n1I?si=30h8Tc68B_Dotnws"}/>
                </div>
                <h3 className=" fw-semibold mb-2">(E)ZER ESATEKO- Leizeak x Salinas eta Ciriza</h3>
                <p className="text-secondary">{t("inicio_descripcion2")} • 2022</p>
              </div>
            </div>
          </div>
          
          {/* BOTÓN DE 'VER MÁS VIDEOS' */}
          <div className="text-center mt-5">
            <a href='https://www.youtube.com/@leizeaktaldea9731'>
            <button className="btn btn-outline-light btn-lg">
              {t("inicio_masVideos")}
              <i className="bi bi-chevron-right ms-2"></i>
            </button>
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN 'PRÓXIMOS CONCIERTOS' */}
      <section className="py-5 text-white" style={{ background: 'linear-gradient(180deg, #000000 0%, #212529 100%)' }}>
        <div className="container py-5">
          <h2 className="display-4 fw-bold text-center mb-5">{t("inicio_titulo2")}</h2>
          
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div>
                {/* Se recorre la lista de conciertos y se crea el componente para cada uno de ellos */}
                {[
                  {fecha: "20 SEPT", tituo: "Concierto Huarte", lugar: "Huarte - Navarra"},
                  {fecha: "22 ABR", tituo: "Concierto 2", lugar: "Lugar 2"},
                  {fecha: "29 ABR", tituo: "Concierto 3", lugar: "Lugar 3"},
                ].map((conci, index) => (
                  <div key={index} className="concierto p-4 mb-3 rounded bg-dark d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                    <div className="d-flex align-items-center gap-4">
                      <div className="text-center text-md-start">
                        <span className="d-block fs-3 fw-bold" style={{ color: "#865709" }}>{conci.fecha}</span> {/* Fecha del concierto */}
                      </div>
                      <div>
                        <h3 className="fs-3 fs-lg-3 fw-semibold mb-1">{conci.tituo}</h3>
                        <p className="text-secondary mb-0">{conci.lugar}</p> {/* Lugar del conciertp */}
                      </div>
                    </div>
                    <div className="mt-3 mt-md-0">
                      <button className="btn text-white" style={{ backgroundColor: "#865709" }}> {/* Botón de 'ver cartel' */}
                        {t("inicio_verCartel")}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    
  );
}

export default Inicio;
