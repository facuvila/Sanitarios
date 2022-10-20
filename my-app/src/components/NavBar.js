import React from 'react'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './NavBar.css';

function navBar() {
  return (
    <div>
      <Image style={{width: 615, height:75, paddingTop: 20}}src="https://www.seoargentina.com.ar/imagenes/logo-garbarino-seo-argentina.png" />
      <nav>
        <a href="/">Home</a>
        <a href="/Products">Productos</a>
        <div class="animation "></div>
      </nav>
      <br/>
    </div>
  )
}

export default navBar