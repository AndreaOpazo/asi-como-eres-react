import React, { useContext } from 'react';
import { IconButton, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import { CartContext } from '../../CartContext';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 5px',
  },
}))(Badge);

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <IconButton color="inherit">
      <StyledBadge badgeContent={cart.length} color="error">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default CartWidget;