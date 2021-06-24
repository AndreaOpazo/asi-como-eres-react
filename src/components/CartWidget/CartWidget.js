import React from 'react';
import { IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const CartWidget = () => {
  return (
    <IconButton color="inherit">
      <AddShoppingCart />
    </IconButton>
  );
};

export default CartWidget;
