import React from 'react';
import { useTranslation } from "react-i18next";
import ObjectCanvas from "../componentes/ObjectCanvas";
import { Modelo3D } from "../componentes/Modelo3D";

function Merchan() {
  const { t } = useTranslation();

  return (
    <div className='text-white'>

    {/* Imagen de fondo */}
      <div className="position-fixed top-0 left-0 w-100 h-100" style={{zIndex:-1,  backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: "url('/imgs/tienda.jpg')"}}>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
        <div className="position-absolute top-0 start-0 w-100 h-100 " style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)' }}></div>
      </div>

      
    
      <div className=" mt-5 ">
  
        {/* Titulo */}
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4">{t("tienda_titulo1")}</h1>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: "700px" }}>{t("tienda_subtitulo1")}</p>
        </div>      


        <div className="mb-5 pb-5"></div>
        <div className="d-none d-lg-block mb-5 pb-5"></div>




        {/* SECCIÓN PRODUCTOS */}
        <section className='container mb-5'>
          <h1 className='display-4 fw-bold text-center mb-4'>{t("tienda_titulo2")}</h1> {/* Titulo2 */}
          <p className='lead text-center mb-5'>{t("tienda_subtitulo2")}</p>
          <div className="row">

            {/* CAMISETA */}
            <div className="col-md-4 p-2">
              <div className="card" >
                <div style={{ height: "400px" }}>
                  <ObjectCanvas key="modeloCamiseta">
                    <Modelo3D ruta={"/modelos/camiseta_7/scene.gltf"}/>
                  </ObjectCanvas>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{t("tienda_articulo1")}</h5>
                  <p className="card-text">{t("tienda_descripcionArticulo1")}</p>
                </div>
              </div>
            </div>

            {/* PUA */}
            <div className="col-md-4">
              <div className="card ">
                <div style={{ height: "400px" }}>
                  <ObjectCanvas key="modeloPua">
                    <Modelo3D ruta={"/modelos/pua/result.gltf"}/>
                  </ObjectCanvas>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{t("tienda_articulo2")}</h5>
                  <p className="card-text">{t("tienda_descripcionArticulo2")}</p>
                </div>
              </div>
            </div>

            {/* DISCO */}
            <div className="col-md-4">
              <div className="card">
              <div style={{ height: "400px" }}>
                <ObjectCanvas key="modeloDisco">
                  <Modelo3D ruta={"/modelos/disco/scene.gltf"}/>
                </ObjectCanvas>
              </div>
              <div className="card-body">
                <h5 className="card-title">{t("tienda_articulo3")}</h5>
                <p className="card-text">{t("tienda_descripcionArticulo3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-5 pb-5"></div>

      {/* SECCIÓN IMÁGENES */}
      <div className="container-fluid py-5 mb-5" style={{ backgroundColor: "#865709", color: "white" }}>
        <div className="row align-items-center text-center">

          <div className="col-md-2 text-start"><img src="" /></div>

          <div className="col-md-3 text-start">
            <img 
            src="/imgs/camisetas.jpg" 
            alt={t("tienda_img1_alt")}
            className="img-fluid rounded" 
            style={{ maxWidth: "100%", height: "auto" }} />
          </div>

          <div className="col-md-2 text-start"><img src="" /></div>

          <div className="col-md-3 text-end">
            <img 
            src="/imgs/logo_camiseta.png" 
            alt={t("tienda_img2_alt")}
            className="img-fluid rounded" 
            style={{ maxWidth: "100%", height: "auto" }} />
          </div>

          <div className="col-md-2 text-start"><img src="" /></div>

        </div>
      </div>
        
      </div>
    </div>
  );
}

export default Merchan;
