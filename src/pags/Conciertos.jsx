import React, { useEffect, useState } from 'react';

function Conciertos() {
       
    const [conciertos, setConciertos] = useState([]);


    const [hoveredImg, setHoveredImg] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [selectedConcierto, setSelectedConcierto] = useState(null);
    
    const [indexFoto, setIndexFoto] = useState(0); 
    const [totalFotos, setTotalFotos] = useState(0); 

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

    // Función para abrir galería de imágenes
    const openModal = (concierto) => {
        setSelectedConcierto(concierto);
        setIsModalOpen(true);
        setIndexFoto(0);
        const total = concierto.fotos ? Object.keys(concierto.fotos).length : 0;
        setTotalFotos(total);
        
        console.log("Total fotos:", total);
    };

    // Función para cerrar galería de imágenes
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedConcierto(null);
    };

    return (
        <div>

            <div className="position-fixed top-0 left-0 w-100 h-100" 
                style={{zIndex:-1,  backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: "url('src/imgs/antxoa2.jpg')"}}>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)' }}></div>
            </div>
           
            <div className="container mt-5 text-white"> 
                <h1 className="display-4 fw-bold text-center mb-4 ">Próximos conciertos</h1>
                <p className="lead text-center mb-5">No hay información sobre los próximos conciertos</p>
                
                <div className="mb-5 pb-5"></div>

                <h1 className="display-4 fw-bold text-center mb-4">Conciertos anteriores</h1>

                <section className="row g-4 ">
                    {conciertos.map((concierto, index) => (
                        
                        <div key={index} className="col-12 col-md-4 mb-4 d-flex align-items-center justify-content-center" style={{position:'relative'}} onMouseEnter={()=>setHoveredImg(index)} onMouseLeave={()=>setHoveredImg(null)}>
                            <img src={`/imgs/carteles/${concierto.cartelImg}.jpg`} alt={`${concierto.descripcion}`} className="img-fluid" 
                                style={{ opacity: (hoveredImg === index && concierto.fotos && Object.keys(concierto.fotos).length > 0) ? 0.5 : 1, transition:'opacity 0.7s'}}
                            />
                            {hoveredImg === index && concierto.fotos && Object.keys(concierto.fotos).length > 0 && (
                                <button className="" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', padding:'10px 20px',
                                    backgroundColor: 'rgba(255, 255, 255, 1)', color: 'black', border: 'none', borderRadius: '5px', cursor: 'pointer'}}
                                    onClick={() => openModal(concierto)}>
                                    Ver galería
                                </button>
                            )}
                        </div>
                    ))}
                </section>
            </div>
        
        
        
        
            {isModalOpen && selectedConcierto && (
                <div className="position-fixed top-0 left-0 w-100 h-100" 
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                    onClick={closeModal}>
                    <div className="p-4 rounded" style={{backgroundColor: 'white', maxWidth: '80%', maxHeight: '80vh', overflowY: 'auto'}} onClick={(e) => e.stopPropagation()} >
                        <h2 className="text-center mb-4">{selectedConcierto.descripcion}</h2>
                        <div className="d-flex flex-wrap justify-content-center">
                            <button style={{backgroundColor:'rgba(0,0,0,0)', border:'none'}}>
                                <i className="bi bi-caret-left-fill fs-1" onClick={() => {if (indexFoto > 0) {setIndexFoto(indexFoto - 1);}}}></i>
                            </button>
                            
                            <img 
                                key={indexFoto} 
                                src={`/imgs/conciertos/${selectedConcierto.fotos[indexFoto]}`} 
                                alt={`${selectedConcierto.descripcion}`} 
                                className="img-fluid m-2" 
                                style={{ maxWidth: '700px', maxHeight: '700px' }}
                            />

                            <button style={{backgroundColor:'rgba(0,0,0,0)', border:'none'}}>
                                <i className="bi bi-caret-right-fill fs-1" onClick={() => {if (indexFoto < totalFotos-1) {setIndexFoto(indexFoto + 1);}}}></i>
                            </button>
                            
                        </div>
                        <p className="text-center mb-4">{indexFoto+1}/{totalFotos}</p>
                        <button className="btn btn-dark mt-3 d-block mx-auto" onClick={closeModal}>Cerrar galería</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Conciertos;
