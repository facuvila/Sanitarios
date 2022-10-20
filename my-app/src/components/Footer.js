import React from 'react';
import { Image } from 'react-bootstrap';

function footer() {
  return (
    <div>
      <h1 style={{paddingTop: 60}}>Marcas Colaboradoras</h1>
      <Image style={{width: 250, height:250, marginRight: 1500}}src="https://logodownload.org/wp-content/uploads/2016/09/tcl-logo-0.png" />
      <Image style={{width: 400, height:250, marginRight: 200, marginTop: -500}}src="https://logos-marques.com/wp-content/uploads/2021/02/Motorola-logo.png" />
      <Image style={{width: 250, height:250, marginRight: 900, marginTop: -500}}src="https://logolook.net/wp-content/uploads/2021/06/Samsung-Logo-1993-2048x1152.png" />
    </div>
  );
}

export default footer