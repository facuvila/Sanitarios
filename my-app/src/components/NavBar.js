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
        {
          currentURL == "http://localhost:3000/Products" ?
          <div class="animation start-about"></div> :
          currentURL == "http://localhost:3000/Contacto" ?
          <div class="animation start-contactos"></div> :
          <div class="animation start-home"></div>
        }
      </nav><br></br>
      <a href='Carrito'><Image style={{width: 100, height: 100, paddingTop: 20, textAlign: 'right', marginLeft: 800}}src= "https://prints.ultracoloringpages.com/c1cbabf9b2ef871625b94b55d8897cc4.png"/></a>
      <br/>
    </div>
  )
}

export default navBar
