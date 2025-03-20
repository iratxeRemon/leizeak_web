import React from 'react';

function CancionCard({url}) {
  return (
    <>
    <div className="card mx-5">
        <iframe 
            height="400"
            className="embed-responsive-item" 
            src={url} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            title="Video"
        ></iframe>{/*
        <div className="card-body">
            <h5 className="card-title">Ez da soinurik</h5>
            
            <p className="card-text">{url}</p>
            <a href="#" class="btn btn-primary">Botón</a>
            
        </div>*/}
    </div>
    </>
    );
}

export default CancionCard;

