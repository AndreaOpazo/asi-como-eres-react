import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Item.css';

const Item = ({ product }) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

  const classes = useStyles();

  return (
    <div className="UserCard">
      <Card className={(classes.root, 'cardStyles')}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={product.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.title}
            </Typography>
            <Typography variant="h4" color="textSecondary" component="h1">
              <span>${product.price}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Item;
