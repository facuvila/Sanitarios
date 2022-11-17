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
        <a><Link to={"/"}>Home</Link></a>
        <a><Link to={"/Products"}>Products</Link></a>
        <a><Link to={"/Contacto"}>Contacto</Link></a>
        <a><Link to={"/SobreNosotros"}>Nosotros</Link></a>
        <a><Link to={"/Carrito"}>Carrito</Link></a>
      </nav>
      <br/>
    </div>
  )
}

export default navBar
