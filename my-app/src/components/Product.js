import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Product({product}) {
  return (
    <Card sx={{ minWidth: 350, maxWidth:350 }}>
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

export default Product;