import React from 'react';

function CancionCard() {
  return (
    <>
    <div className="card mx-5">
        {/*
        <iframe width="560" 
            height="315" 
            src="https://www.youtube.com/embed/GamI7OqOILM?si=FpaUdqEjWyWHXvlG" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
        */}
        <iframe 
        height="180"
            className="embed-responsive-item" 
            src="https://www.youtube.com/embed/GamI7OqOILM?si=FpaUdqEjWyWHXvlG" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            title="Video"
        ></iframe>
        <div className="card-body">
            <h5 className="card-title">Ez da soinurik</h5>
            <p className="card-text">Contenido.</p>
            <a href="#" class="btn btn-primary">Botón</a>
        </div>
    </div>
    </>
    );
}

export default CancionCard;

