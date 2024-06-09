import React from 'react'
import './hero.css'
import 'animate.css';
import Logo from '../../Recursos/Imagenes/LogoBach.png'
import Video from '../../Recursos/Imagenes/HeroVideo2.mp4'

function Hero() {
  return (
    <div className='hero' id='Inicio'>
      <video autoPlay loop muted playsInline poster='https://s1.elespanol.com/2019/07/23/como/como_hacer_415969961_130752105_1706x960.jpg' className='hero-video'>
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