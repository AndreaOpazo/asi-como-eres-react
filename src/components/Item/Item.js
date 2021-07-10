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
    <div className="UserCard">
      <Card className="cardStyles">
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={product.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.title}
            </Typography>
            <Typography variant="h4" color="textSecondary" component="h1">
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
    </div>
  );
};

export default Item;
