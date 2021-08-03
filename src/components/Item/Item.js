import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import './Item.css';

const Item = ({ product }) => {
  return (
    <Card className="cardStyles">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200px"
          image={product.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {product.title}
          </Typography>
          <Typography variant="h5" color="textSecondary" component="h1">
            <span>${product.price}</span>
          </Typography>
          <br />
          <Typography variant="subtitle1" color="textSecondary">
            {
              product.stock === 0
                ? "Sin stock" 
                : `Unidades Disponibles: ${product.stock}`
            }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
