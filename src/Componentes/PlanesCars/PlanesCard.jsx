import React from 'react'
import './planesCard.css'

function PlanesCard({titulo, servicios, descripcion}) {

  return (
    <div className="card" key={titulo}>
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <div className='py-3'>
          <h6 className="card-subtitle mb-2">Servicios Incluidos:</h6>
          {
            Object.values(servicios).map((servicio, index) => (
              <li className='text-start' key={index}>{servicio}</li>
            ))
          }
        </div>
        {/* <h6 className="card-subtitle">{descripcion}</h6> */}
      </div>
      <a href='https://api.whatsapp.com/send?phone=5493814448523' target='_blanck'>
        <button className='card-button my-2'>
          Pedi tu presupuesto!
        </button>
      </a>
    </div>
  )
}

export default PlanesCard