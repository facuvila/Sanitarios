import React from 'react';
import { Image } from 'react-bootstrap';
import './Footer.css'

function footer() {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>Sobre nosotros:</h6>
            <p class="text-justify">Trabajo realizado por <i>Ilan Raijel y Facundo Vilamowski</i>.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Links rápidos</h6>
            <ul class="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/Products">Todos los productos</a></li>
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by <a href="#">Ilan R & Facundo V</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer