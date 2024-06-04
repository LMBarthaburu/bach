import React from 'react'
import './clientes.css'
import Marquee from 'react-fast-marquee' 
import av1 from '../../Recursos/Imagenes/AV1.png'
import av2 from '../../Recursos/Imagenes/AV2.png'
import av3 from '../../Recursos/Imagenes/AV3.png'
import jockey from '../../Recursos/Imagenes/WhatsApp Image 2024-04-23 at 16.04.49.jpeg'
import yungas from '../../Recursos/Imagenes/WhatsApp Image 2024-04-23 at 16.04.50 (1).jpeg'
import sp from '../../Recursos/Imagenes/WhatsApp Image 2024-04-23 at 16.04.50.jpeg'
import fdn from '../../Recursos/Imagenes/WhatsApp Image 2024-04-24 at 12.24.22.jpeg'
import cmp from '../../Recursos/Imagenes/cmp.png'





function Clientes() {
  return (
    <div id='Clientes' className=''>
      <div className='clientes-titulo-cpntenedor container'>
        <h2 className='clientes-titulo'>Nuestros Clientes</h2>
        <div className='clientes-clippath'></div>
      </div>
      <Marquee className='marquee' speed={100} gradient={true} gradientWidth={80}>
        <img src={av1} alt="" className='marquee-img'/>
        <img src={jockey} alt="" className='marquee-img'/>
        <img src={av2} alt="" className='marquee-img'/>
        <img src={yungas} alt="" className='marquee-img'/>
        <img src={av3} alt="" className='marquee-img'/>
        <img src={sp} alt="" className='marquee-img'/>
        <img src={fdn} alt="" className='marquee-img'/>
        <img src={cmp} alt="" className='marquee-img'/>


      </Marquee>
    </div>
  )
}

export default Clientes