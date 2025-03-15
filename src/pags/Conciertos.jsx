import React, { useState } from 'react';
import Concierto from '../componentes/Concierto';

function Conciertos() {
    const imagenes = [
    '1742031350656.jpg',
    '1742031350667.jpg',
    '1742031350678.jpg',
    '1742031350689.jpg',
    '1742031350701.jpg',
    '1742031350712.jpg',
    '1742031350723.jpg',

    '1742031350734.jpg',
    '1742031350745.jpg',
    '1742031350756.jpg',
    '1742031350767.jpg',
    '1742031350780.jpg',
    '1742031350791.jpg',
    '1742031350801.jpg',
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
