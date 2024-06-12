import React from 'react'
import './footer.css'
import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <div className='footer-container'>
      <footer>
        <div className='background'>
        <svg
            className='svg-bg'
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="100%"
            height="100%"
            viewBox="0 0 1600 900"
          >
            <defs>
              <path
                id="wave"
                fill="rgb(53, 163, 14, 0.6)"
                d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
                s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
              />
            </defs>
            <g>
              <use href="#wave" opacity=".4">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="8s"
                  calcMode="spline"
                  values="270 230; -334 180; 270 230"
                  keyTimes="0; .5; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite"
                />
              </use>
              <use href="#wave" opacity=".6">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="6s"
                  calcMode="spline"
                  values="-270 230;243 220;-270 230"
                  keyTimes="0; .6; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite"
                />
              </use>
              <use href="#wave" opacty=".9">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="4s"
                  calcMode="spline"
                  values="0 230;-140 200;0 230"
                  keyTimes="0; .4; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite"
                />
              </use>
            </g>
          </svg>
        </div>
        <section>
          <ul className='socials'>
            <li><a href="https://www.instagram.com/bach.jardineria/" target='_blanck'><FaInstagram/></a></li>
          </ul>
          <ul className='links'>
            <li><a href="#Planes">Planes</a></li>
            <li><a href="#Servicios">Servicios</a></li>
            <li><a href="#Nosotros">Nosotros</a></li>
            <li><a href="#Galeria">Galeria</a></li>
            <li><a href="#Clientes">Clientes</a></li>
            <li><a href="#Contacto">Contacto</a></li>
          </ul>
          <p className='legal'>2024 Bach Járdines y Espacios Verdes® </p>
          <a className='link' href='https://lmb-portfolio.netlify.app/' target='_blanck'>Made by LMBWebDev</a>
        </section>
      </footer>
    </div>
  )
}

export default Footer