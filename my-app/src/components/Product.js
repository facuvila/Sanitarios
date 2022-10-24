import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";

function Product({product}) {
  console.log(product)
  let { id } = useParams();
  if(id) {
    return (
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
              Descripción: 
              {product.description}
          </Typography>
        </CardContent>
      </Card>
    );
  } else {
    return (
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
        </CardActions>
      </Card>
    );
  }
}

export default Product;