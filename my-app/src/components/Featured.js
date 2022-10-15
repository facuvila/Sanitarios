import React from "react";
import Product from "./Product";
<<<<<<< HEAD
import config from '../config'
=======
import '../App.css';
>>>>>>> de96b64023a4c3e1465ab5dea7b1fc49ae7e704a
function Featured() {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://dummyjson.com/products`)
        .then(res => res.json())
        .then(res => {
            setProducts(res.products)
        })
        .catch(err => console.error(err));
    }, []);

    return (
        <div className="content-body">
<<<<<<< HEAD
            { products.map((product) => {
                if(product.id <= config.featuredQuantity) {
                    return <Product key={product.id} product={product} />
                }
            }) }
=======
            <div class="flexbox-container">
                { products.map(product => <Product key={product.id} product={product} />) }
            </div>
>>>>>>> de96b64023a4c3e1465ab5dea7b1fc49ae7e704a
        </div>
    );
}

export default Featured;