import React from 'react';
import CancionCard from '../componentes/CancionCard'; 

function Inicio() {
  return (
    <>
    <section>
      <div className="position-relative container-fluid p-0" style={{ width: '100%' }}>
        <img src="src/imgs/fondo.jpg" alt="Fondo" className="img-fluid" style={{width:'100vw', height:'500px', objectFit:'cover'}}/>
        <div className="position-absolute start-50 translate-middle text-center text-white bg-dark bg-opacity-50 p-3 rounded" style={{top:'20%',  padding:'10px 20px', borderRadius:'17px'}}>
          <h1>Nuevo disco próximamente</h1>
          <p>Escuchar ahora</p>
        </div>
      </div>
    </section>

    <div className="container mt-5">
      {/* NUESTRA MÚSICA */}
      <section className="text-center mb-5">
        <h2 className="text-center mb-4">Nuestra música</h2>
        <div className="card-group">
          <CancionCard url={"https://www.youtube.com/embed/rZWUMpBWUe0?si=A2-P_aVt5CN7TXOn"}/>
          <CancionCard url={"https://www.youtube.com/embed/690Slph2n1I?si=30h8Tc68B_Dotnws"}/>
        </div>
      </section>
    </div>
    </>
  );
}

export default Inicio;
