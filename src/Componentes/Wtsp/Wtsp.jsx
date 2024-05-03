import React from 'react'
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import './wtsp.css'

function Wtsp() {
  return (
    <div className='wtsp'>
      <a href='https://api.whatsapp.com/send?phone=3814010691' target='_blanck'>
        <PiWhatsappLogoDuotone/>
      </a>
    </div>
  )
}

export default Wtsp