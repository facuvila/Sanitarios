import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';

function navBar() {
  return (
    <div>
      <h1>TIENDA</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/Products">Productos</a>
        <div class="animation start-home"></div>
      </nav>
      <br/>
    </div>
  )
}

export default navBar