import React, {useContext, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import { Badge } from '@mui/material';


function addToCarrito(products, setProducts, id) {
  let aux = products
  aux[id].quantity++
  setProducts(aux)
}

function removeFromCarrito(products, setProducts, id) {
  let aux = products
  aux[id].quantity--
  setProducts(aux)
}

function Product({product, products, setProducts}) {
  let { id } = useParams();
  const [contador, setContador] = useState(product.quantity)
  if(id) {
    return (
      <Badge badgeContent={"EN CARRITO"} color="primary" invisible={contador == 0}>
        <Card sx={{ minWidth: 350, maxWidth:350, minHeight: 350, textAlign: 'center', width: "50%", top: "25%", margin: "0 auto" }}>
          <CardMedia
            component="img"
            height="200"
            image={product.thumbnail}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                ${product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Marca: {product.brand} <br></br>
                Descripción: {product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button disabled={product.quantity == 0} onClick={() => {removeFromCarrito(products, setProducts, product.id-1); let aux = contador-1; setContador(aux)}} size="small">-</Button>
            {contador}
            <Button onClick={() => {addToCarrito(products, setProducts, product.id-1); let aux = contador+1; setContador(aux)}} size="small">+</Button>
          </CardActions>
        </Card>
      </Badge>
    );
  } else {
    return (
      <Badge badgeContent={"EN CARRITO"} color="primary" invisible={contador == 0}>
        <Card sx={{ minWidth: 350, maxWidth:350, minHeight: 350, maxHeight:350, textAlign: 'center', width: "50%", top: "25%", margin: "0 auto" }}>
          <CardMedia
            component="img"
            height="140"
            image={product.thumbnail}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                ${product.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button href={'/DetalleProducto/' + product.id} size="small">Ver detalles</Button>
            <Button disabled={product.quantity == 0} onClick={() => {removeFromCarrito(products, setProducts, product.id-1); let aux = contador-1; setContador(aux)}} size="small">-</Button>
            {contador}
            <Button onClick={() => {addToCarrito(products, setProducts, product.id-1); let aux = contador+1; setContador(aux)}} size="small">+</Button>
          </CardActions>
        </Card>
      </Badge>
    );
  }
}

export default Product;