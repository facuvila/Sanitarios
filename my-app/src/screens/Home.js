import Gallery from "../components/Carousel";
import ProductList from '../components/ProductList';
import config from '../config'

function Home() {
    return (
        <div className="content-body">
           <Gallery/>
           <ProductList quantity={config.featuredQuantity}/>
        </div>
    )
}

export default Home;