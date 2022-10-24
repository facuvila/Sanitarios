import React from 'react'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './NavBar.css';

function navBar() {
  let currentURL = window.location.href;

  return (
    <div>
      <Image style={{width: 615, height:75, paddingTop: 20}}src="https://www.seoargentina.com.ar/imagenes/logo-garbarino-seo-argentina.png" />
      <nav>
        <a href="/">Home</a>
        <a href="/Products">Productos</a>
        {
          currentURL == "http://localhost:3000/Products" ?
          <div class="animation start-about"></div> :
          <div class="animation start-home"></div>
        }
      </nav><br></br>
      <br/>
    </div>
  )
}

export default navBar
