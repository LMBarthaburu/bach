import React from 'react'

function BotonWtsp({titulo}) {
  const valor =`https://api.whatsapp.com/send?phone=5493814448523&text=Hola! Solicito información sobre ${titulo}`
  return (
    <>
    <a href={valor} target='_blanck'>
      <button  className='card-button my-2'>Pedí tu presupuesto!</button>
    </a>
    </>  
  )
}

export default BotonWtsp