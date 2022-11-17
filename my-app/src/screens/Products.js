import ProductList from '../components/ProductList';

function Products() {
    return (
        <div className="content-body">
            <h1>TODOS LOS PRODUCTOS</h1>
           <ProductList quantity={30}/>
        </div>
    )
}

export default Products;