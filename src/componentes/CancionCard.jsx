import React from 'react';

function CancionCard({url}) {
  return (
    <>
    <div className="card">
        <iframe 
            height="400"
            className="embed-responsive-item" 
            src={url} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            title="Video"
        ></iframe>
    </div>
    </>
    );
}

export default CancionCard;

