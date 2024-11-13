import React from 'react';
import CancionCard from '../componentes/CancionCard'; 

function Inicio() {
  return (
    <>
    {/*  */}
<section>
<div className="container-fluid p-0">
  <div className="position-relative" style={{ width: '100%' }}>
    <img 
      src="src/imgs/fondo.jpg" 
      alt="Fondo" 
      className="img-fluid" 
      style={{ width: '100vw', height: '500px', objectFit: 'cover' }} 
    />
    <div 
      className="position-absolute start-50 translate-middle text-center text-white bg-dark bg-opacity-50 p-3 rounded"
      style={{ top:'20%',  padding: '10px 20px', borderRadius: '17px' }}
    >
      <h1>Nuevo disco proximamente</h1>
      <p>Escuchar ahoral</p>
    </div>
  </div>
</div>

</section>
  <div className="container mt-5">


  {/* NUESTRA MÚSICA */}
  <section className="text-center">
      <h2>Nuestra música</h2>
      <div className="card-group">
        <CancionCard />
        <CancionCard />
        <CancionCard />
      </div>
  </section>

            
    </div>
    </>
  );
}

export default Inicio;
