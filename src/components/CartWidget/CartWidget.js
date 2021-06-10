import React from 'react';
import { Icon } from 'semantic-ui-react';
import './CartWidget.css';

const CartWidget = ({ size }) => {
  const clase = size === 'big' ? 'padding-widget' : '';

  return <Icon name="shopping cart" size={size} className={clase} />;
};

export default CartWidget;
