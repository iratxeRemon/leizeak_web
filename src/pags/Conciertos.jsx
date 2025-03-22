import React, { useEffect, useState } from 'react';
import Concierto from '../componentes/Concierto';

function Conciertos() {
       
    const [hoveredImg, setHoveredImg] = useState(null);
    const [conciertos, setConciertos] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("/data/conciertos.json"); // Carga el JSON
            if (!response.ok) throw new Error("Error al cargar los datos");
            const data = await response.json();
            setConciertos(data);
            console.log(data);            
          } catch (error) {
            console.error("Error al obtener los datos:", error);
          }
        };
    
        fetchData();
    },[]);



    return (
        <div>
            {/*
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: "url('src/imgs/fondo_negro.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.9, 
                    zIndex: -1  
                }}></div>
            */}
            
        
        <div className="container mt-5 "> {/* text-white */}
            <h1 className="text-center mb-4 ">Próximos conciertos</h1>
            <p className="text-center mb-5">No hay información sobre los próximos conciertos</p>
            
            <div className="mb-5 pb-5"></div>

            <h1 className="text-center mb-4">Conciertos anteriores</h1>

            <section className="row g-4 ">
            {conciertos.map((concierto, index) => (
                
                <div key={index} className="col-12 col-md-4 mb-4 d-flex align-items-center justify-content-center" style={{position:'relative'}} onMouseEnter={()=>setHoveredImg(index)} onMouseLeave={()=>setHoveredImg(null)}>
                    <img src={`src/imgs/carteles/${concierto.cartelImg}.jpg`} alt={`${concierto.descripcion}`} className="img-fluid" 
                        style={{ opacity: (hoveredImg === index && concierto.fotos && Object.keys(concierto.fotos).length > 0) ? 0.4 : 1, transition:'opacity 0.7s'}}
                    />
                    {hoveredImg === index && concierto.fotos && Object.keys(concierto.fotos).length > 0 && (
                        <button className="" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', padding:'10px 20px',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)', color: 'black', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
                            Ver galería
                        </button>
                    )}
                </div>
            ))}
                
            </section>
        </div></div>
    );
}

export default Conciertos;
