import React from "react";
import Product from "./Product";
import '../App.css';
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
            <div class="flexbox-container">
                { products.map(product => <Product key={product.id} product={product} />) }
            </div>
        </div>
    );
}

export default Featured;