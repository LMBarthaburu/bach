import React from 'react'
import './nosotros.css'

function Nosotros() {
  return (
    <div className='container my-3 my-md-5' id='Nosotros'>
      <h2 className='nosotros-titulo container'>Nosotros</h2>
      <p className='container'>
      <b> Somos Bach Jardínes y Espacios Verdes </b> una empresa familiar en Tucumán, Argentina, especializada en la creación y mantenimiento de jardines y espacios verdes. Ofrecemos servicios integrales que incluyen diseño de paisajismo, poda, limpieza y fumigación.
      </p>
      <div className='subtitulo'>
        <h3 className='nosotros-titulo nosotros-subtitulo'>Nuestra Misión</h3>
        <div className='nosotros-clippath'></div>
      </div>
      <p className='container'>La misión de <b>BACH</b> es brindar un servicio eficiente, cubriendo todas las necesidades de Empresas, Countries, Barrios Privados, negocios y viviendas, poniendo a disposición un servicio integral de mantenimiento de espacios verdes durante todo el año con un equipo capacitado con herramientas y maquinarias de última tecnología.</p>
    </div>
  )
}

export default Nosotros
