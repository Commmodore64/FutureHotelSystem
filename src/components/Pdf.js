import React from 'react';
import Factura from './FacturaHotel.png'

function ImageViewer() {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={Factura} alt="imagen" className="max-w-full max-h-full" />
    </div>
  );
}

export default ImageViewer;
