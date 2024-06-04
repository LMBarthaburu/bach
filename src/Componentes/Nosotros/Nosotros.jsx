import React from 'react'
import './nosotros.css'

function Nosotros() {
  return (
    <div className='container my-3 my-md-5' id='Nosotros'>
      <h2 className='nosotros-titulo container'>Nosotros</h2>
      <p className='container'>
      <b>#SomosBach</b> una empresa familiar formada por Santiago Chavanne y Paula Barthaburu.
      <br />
      <b>BACH</b> es una empresa Tucumana que brinda servicios de espacios verdes, mantenimientos de jardines, podas, limpieza, paisajismo y fumigaciones.
      </p>
      <div className='subtitulo'>
        <h3 className='nosotros-titulo nosotros-subtitulo'>Nuestra Misión</h3>
        <div className='nosotros-clippath'></div>
      </div>
      <p className='container'>La misión de Bach es brindar un servicio eficiente, cubriendo todas las necesidades de Empresas, Countries, Barrios Privados, negocios y viviendas, poniendo a disposición un completo servicio integral de mantenimiento de espacios verdes durante todo el año. Además, contamos con un equipo capacitado, maquinarias y herramientas de última tecnología.</p>
    </div>
  )
}

export default Nosotros
