import React from 'react'
import './hero.css'
import 'animate.css';
import Logo from '../../Recursos/Imagenes/LogoBach.png'
import Video from '../../Recursos/Imagenes/HeroVideo2.mp4'
import Cesped from '../../Recursos/Imagenes/cespedHero.webp'

function Hero() {
  return (
    <div className='hero' id='Inicio'>
      <video autoPlay loop muted playsInline poster={Cesped} className='hero-video'>
        <source src={Video} type='video/mp4'/>
      </video>
      <div className='hero-clippath'></div>
      <div>
        <img src={Logo} alt="Logo BACH" className='hero-logo animate__animated animate__fadeIn animate__delay-2s'/>
      </div>
    </div>
  )
}

export default Hero