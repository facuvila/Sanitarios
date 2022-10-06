import React from 'react'
import Carousel from 'better-react-carousel'
import '../App.css';

function Gallery() {
  return (
    <Carousel cols={1} rows={1} gap={10} loop autoplay={3000}>
      <Carousel.Item>
        <div class="container">
            <img width="100%" src="https://picsum.photos/800/300?random=1" />
            <h1 class="bottom-centered">Hola</h1>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="container">
            <img width="100%" src="https://picsum.photos/800/300?random=2" />
            <h1 class="bottom-centered">Hola</h1>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="container">
            <img width="100%" src="https://picsum.photos/800/300?random=3" />
            <h1 class="bottom-centered">Hola</h1>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default Gallery;