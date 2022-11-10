import React from 'react'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './NavBar.css';

function navBar() {
  let currentURL = window.location.href;

  return (
    <div>
      <a href='/'><Image style={{width: 615, height:90, paddingTop: 20}}src="https://www.seoargentina.com.ar/imagenes/logo-garbarino-seo-argentina.png" /></a>
      
      <nav>
        <a href="/">Home</a>
        <a href="/Products">Productos</a>
        <a href="/Contacto">Contacto</a>
        <a href="/SobreNosotros">AboutUs</a>
        <a href="/Carrito">Carrito</a>
        <a href="/ContactosGuardados">Contactos</a>
        {
          currentURL == "http://localhost:3000/Products" ?
          <div class="animation start-products"></div> :
          currentURL == "http://localhost:3000/Contacto" ?
          <div class="animation start-contactos"></div> :
          currentURL == "http://localhost:3000/SobreNosotros" ?
          <div class="animation start-about"></div> :
          currentURL == "http://localhost:3000/Carrito" ?
          <div class="animation start-carrito"></div> :
          currentURL == "http://localhost:3000/ContactosGuardados" ?
          <div class="animation start-contactosGuardados"></div> :
          <div class="animation start-home"></div>
        }
      </nav><br></br>
      <br/>
    </div>
  )
}

export default navBar
