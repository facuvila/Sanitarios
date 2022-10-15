import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';

function navBar() {
  return (
    <div>
      <img src="./Logo.png"/>
      <nav>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Sedes</a>
        <a href="#">Portefolio</a>
        <a href="#">Contact</a>
        <div class="animation start-home"></div>
      </nav>
    </div>
  )
}

export default navBar