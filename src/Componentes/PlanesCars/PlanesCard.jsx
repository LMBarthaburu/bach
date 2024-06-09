import React from 'react'
import './planesCard.css'
import BotonWtsp from '../BotonWtsp/BotonWtsp'

function PlanesCard({titulo, servicios, descripcion}) {

  return (
    <div className="card" key={titulo}>
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <div className='py-3'>
          <h6 className="card-subtitle mb-2">Servicios Incluidos:</h6>
          {
            Object.values(servicios).map((servicio, index) => (
              <li className='text-start fw-bold' key={index}>{servicio}</li>
            ))
          }
        </div>
      </div>
      <BotonWtsp titulo={titulo}/>
    </div>
  )
}

export default PlanesCard