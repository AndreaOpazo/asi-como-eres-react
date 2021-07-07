import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import CartList from '../../components/CartList/CartList';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';
import './Cart.css';

const Cart = () => {
  const { cart } = useContext(CartContext);
  const msgAlert = (<Alert icon={false} severity="info">Tu carrito está vacío.</Alert>);
  
  return (
    <Container className="cart">
      <img
        src="./images/queEmocion.png"
        width="65%"
        height="auto"
        alt="que emocion"
        className="img"
      ></img>
      {cart.length ? <CartList /> : msgAlert}
      <Link to="/">
        <br/>
        <Button variant="contained" color="primary">
          Volver al inicio
        </Button>
      </Link>
    </Container>
  );
};

export default Cart;
