import React from "react";
import Product from "./Product";

function Products() {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://dummyjson.com/products`)
        .then(res => res.json())
        .then(res => setProducts(res.products))
        .catch(err => console.error(err));
    }, []);

    return (
        <div className="content-body">
            { products.map(product => <Product key={product.id} product={product} />) }
        </div>
    );
}

export default Products;