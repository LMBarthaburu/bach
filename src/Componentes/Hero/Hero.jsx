import React from 'react'
import './hero.css'
import 'animate.css';
import Logo from '../../Recursos/Imagenes/LogoBach.png'
import Video from '../../Recursos/Imagenes/CamPoder SRL _ Un sólido respaldo para tu campo - Google Chrome 2023-05-03 20-07-31.mp4'

function Hero() {
  return (
    <div className='hero' id='Inicio'>
      <video src={Video} autoPlay loop muted className='hero-video'></video>
      <div className='hero-clippath'></div>
      <div>
        <img src={Logo} alt="Logo BACH" className='hero-logo animate__animated animate__fadeIn animate__delay-2s'/>
      </div>
    </div>
  )
}

export default Hero