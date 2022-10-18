import { useContext } from "react";
import { useParams } from "react-router-dom";
import {productsContext} from '../App.js'

function Detalle() {
    let { id } = useParams();
    let products = useContext(productsContext);

    if(products) {
        let product = products.find(product => {
            return product.id == id
        })
        if(product) {
            return (
                <div className="content-body">
                    <p>Nombre del producto: {product.title}</p>
                    <p>Precio: ${product.price}</p>
                    <p>Marca: {product.brand}</p>
                </div>
            );
        }
    } else {
        return "Cargando...";
    }
}

export default Detalle;