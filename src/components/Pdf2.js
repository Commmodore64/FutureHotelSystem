import React from 'react';
import FacturaRes from './FacturaRestaurante.png'

function ImageViewer() {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={FacturaRes} alt="imagen"/>
    </div>
  );
}

export default ImageViewer;