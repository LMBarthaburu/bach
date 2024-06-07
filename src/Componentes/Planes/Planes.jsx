import React from 'react'
import './planes.css'
import {PlanesDb} from '../../Recursos/DB/Planes'
import PlanesCard from '../PlanesCars/PlanesCard'

function Planes() {
  return (
    <div id='Planes' className='container'>
      <div className='planes-titulo-cpntenedor'>
        <h2 className='planes-titulo'>Planes</h2>
       <div className='planes-clippath'></div>
    </div>
    <div className='planes-container my-3'>
      {
        PlanesDb.map(item=><PlanesCard key={item.titulo} titulo={item.titulo} descripcion={item.descripcion} servicios={item.servicios}/>)
      }
      </div>
    </div>
  )
}

export default Planes