import React, { useState } from 'react';
import Concierto from '../componentes/Concierto';

function Conciertos() {
    const imagenes = [
    '2024_11_23.jpg',
    '2024_09_19.jpg',
    '2024_08_31.jpg',
    '2024_07_08.jpg',
    '2024_07_06.jpg',
    '2024_04_20.jpg',
    '2024_01_26.jpg',

    '2023_10_07.jpg',
    '2023_09_30.jpg',
    '2023_09_29.jpg',
    '2023_07_22.jpg',
    '2023_06_022.jpg',
    '2023_06_09.jpg',
    '2022_11_19.jpg',
    ];
    
    const [hoveredImg, setHoveredImg] = useState(null);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Últimos conciertos</h1>

            <section className="row mt-5">
                {imagenes.map((imagen, index) => (
                    <div key={index} className="bg-black col-12 col-md-4 mb-4" style={{position:'relative'}} onMouseEnter={()=>setHoveredImg(index)} onMouseLeave={()=>setHoveredImg(null)}>
                        <img src={`src/imgs/carteles/${imagen}`} alt={`Cartel ${index + 1}`} className="img-fluid" 
                            style={{ opacity: hoveredImg === index ? 0.4 : 1, transition:'opacity 0.7s'}}
                        />
                        {hoveredImg === index && (
                            <button className="view-gallery-btn" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', padding:'10px 20px',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)', color: 'black', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
                                Ver galería
                            </button>
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Conciertos;
