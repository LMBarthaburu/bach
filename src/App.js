import React from 'react'
import Navbar from './Componentes/Navbar/Navbar'
import Hero from './Componentes/Hero/Hero'
import Nosotros from './Componentes/Nosotros/Nosotros'
import Planes from './Componentes/Planes/Planes'
import Galeria from './Componentes/Galeria/Galeria'
import Servicios from './Componentes/Servicios/Servicios'
import Contacto from './Componentes/Contacto/Contacto'
import Clientes from './Componentes/Clientes/Clientes'
import Footer from './Componentes/Footer/Footer'
import Wtsp from './Componentes/Wtsp/Wtsp'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Nosotros/>
      <Servicios/>
      <Planes/>
      <Galeria/>
      <Clientes/>
      <Contacto/>
      <Footer/>
      <Wtsp/>
    </>
  )
}

export default App