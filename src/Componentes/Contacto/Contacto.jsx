import React, { useRef, useState } from 'react'
import './contacto.css'
import emailjs from 'emailjs-com'

function Contacto() {
  const formRef = useRef()
  const [done, setDone]=useState(false)


  const handleSubmit=(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_choa8fg','template_nmv14z1', formRef.current,'_ZhfpcBk3d4D5yUqS')
    setDone(true)
    const formulario =document.getElementById('formulario')
    formulario.reset()
  }
  return (
    <div id='Contacto' className='contacto container'>
      <div className='contacto-img'></div>
      <div className='contacto-form'>
        <div className='contacto-titulo-cpntenedor'>
          <h2 className='contacto-titulo'>Contacto</h2>
          <div className='contacto-clippath'></div>
        </div>
        <section>
            <form className='contacto-formulario' ref={formRef} onSubmit={handleSubmit} id='formulario'>
              <input type="text" required placeholder='Nombre'className='contacto-input' name='user_name'/>
              <input type="email" required placeholder='Email' className='contacto-input' name='user_email'/>
              <input type="number" required placeholder='Telefono'className='contacto-input' name='user_phone'/>
              <input type="text" required placeholder="Asunto" className='contacto-input' name='user_subject'/>
              <textarea id="mensaje" cols="20" rows="5" required placeholder='Mensaje'className='contacto-input' name='message'></textarea>
              <div>
                <button className='contacto-boton'>Enviar Mensaje</button>
                {done && <p className='sent-msg'>Mensaje enviado con exito!</p>}
              </div>
            </form>
        </section>
      </div>
    </div>
  )
}

export default Contacto