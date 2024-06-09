import React from 'react'
import './servicios.css'

function Servicios() {
  
  return (
    <div className='servicios' id='Servicios'>
      <div className='servicios-contenedor jardineria'>
        <div className='servicios-clippath'></div>
        <h3 className='servicios-texto'>JARDINERIA<br />AREAS VERDES</h3>
      </div>
      <div className='servicios-contenedor poda'>
        <div className='servicios-clippath'></div>
        <h3 className='servicios-texto'>PODA<br />RECOLECCION</h3>
      </div>      
      <div className='servicios-contenedor paisajismo'>
        <div className='servicios-clippath'></div>
        <h3 className='servicios-texto'>PAISAJISMO</h3>
      </div>      
      <div className='servicios-contenedor fumigacion'>
        <div className='servicios-clippath'></div>
        <h3 className='servicios-texto'>FUMIGACION</h3>
      </div>
    </div>
  );
}

export default Servicios