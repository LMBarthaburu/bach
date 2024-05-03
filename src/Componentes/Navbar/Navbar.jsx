import './navbar.css'
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) { 
      setShow(false); 
    } else { 
      setShow(true);  
    }
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);// eslint-disable-line react-hooks/exhaustive-deps

  const collapseNavbar =()=>{
    const button = document.getElementById('button')
    const nav = document.getElementById('navbarNav')
    button.classList.add('collapsed')
    nav.classList.remove('show')
  }

  return (
    <nav className={`navbar navbar-expand-lg activeNav ${show || 'hidden'}`}>
      <div className="container-fluid container">
        <a className="navbar-brand" href="#Inicio">BACH</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id='button'>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#Nosotros" onClick={collapseNavbar}>Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Servicios" onClick={collapseNavbar}>Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Planes" onClick={collapseNavbar}>Planes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Galeria" onClick={collapseNavbar}>Galeria</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Clientes" onClick={collapseNavbar}>Clientes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contacto" onClick={collapseNavbar}>Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;