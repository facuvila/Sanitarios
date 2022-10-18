import React from 'react'
import Carousel from 'better-react-carousel'
import '../App.css';

function Gallery() {
  return (
    <Carousel cols={1} rows={1} gap={10} loop autoplay={3000}>
      <Carousel.Item>
        <div class="container">
            <img width="100%" src="https://media.steelseriescdn.com/thumbs/filer_public/c8/59/c859902e-6efa-4942-89f8-fbf49f39e5ef/feature_prime_all_d_cross_sale_1.jpg__1920x700_q100_crop-scale_optimize_subsampling-2.jpg" />
            <h1 class="bottom-centered">La mejor tecnología</h1>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="container">
            <img width="100%" src="https://iguatemi.com.br/institucional/sites/institucional/files/styles/crop_tela_cheia_1920x720/public/2018-01/MPSC_3_0.jpg?itok=da7e2z5T" />
            <h1 class="bottom-centered">Miles de productos</h1>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="container">
            <img width="100%" src="https://www.pgaresort.com/content/uploads/2021/04/shutterstock_1486074167-min-scaled-crop-1619108644-2560x960.jpg" />
            <h1 class="bottom-centered">Los mejores descuentos</h1>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default Gallery;