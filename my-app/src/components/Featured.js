import React from "react";
import Product from "./Product";
import config from '../config'
function Featured() {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://dummyjson.com/products`)
        .then(res => res.json())
        .then(res => setProducts(res.products))
        .catch(err => console.error(err));
    }, []);

    return (
        <div className="content-body">
            { products.map((product) => {
                if(product.id <= config.featuredQuantity) {
                    return <Product key={product.id} product={product} />
                }
            }) }
        </div>
    );
}

export default Featured;