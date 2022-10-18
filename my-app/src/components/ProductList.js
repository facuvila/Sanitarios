import React, {useContext} from "react";
import Product from "./Product";
import '../App.css';
import {productsContext} from '../App.js'
import { Box } from "@mui/system";

function ProductList(quantity) {
    let products = useContext(productsContext);
    if(products) {
        return (
            <Box flexWrap="wrap" display="flex" style={{maxWidth: 1050}}>
            { products.map((product) => {
                if(product.id <= quantity.quantity) {
                    return <Product key={product.id} product={product} />
                }
            }) }
            </Box>
        );
    } else {
        return "Cargando...";
    }

}

export default ProductList;