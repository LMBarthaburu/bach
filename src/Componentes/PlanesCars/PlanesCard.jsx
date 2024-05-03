import React from 'react'
import './planesCard.css'

function PlanesCard({titulo, servicios, descripcion}) {

  return (
    <div className="card" key={titulo}>
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <div className='py-3'>
          <h6 className="card-subtitle">Servicios Incluidos:</h6>
          {
            Object.values(servicios).map((servicio, index) => (
              <p key={index}>{servicio}</p>
            ))
          }
        </div>
        <h6 className="card-subtitle">{descripcion}</h6>
      </div>
      <button className='card-button my-2'>Pedi tu presupuesto!</button>
    </div>
  )
}

export default PlanesCard