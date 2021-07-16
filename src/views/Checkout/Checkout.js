import React, { useContext, useState } from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { CartContext } from '../../CartContext';
import Form from '../../components/Form/Form';
import Order from '../../components/Order/Order';
import { calcularTotalYEnvio, getActualDate } from '../../utils';
import { createOrder } from '../../firebase';
import './Checkout.css';
import { AlertTitle } from '@material-ui/lab';

const Checkout = () => {
  const { cart, clear } = useContext(CartContext);
  const [newOrderID, setNewOrderID] = useState(null);

  const realizarPedido = async (buyer) => {
    const order = {
      buyer,
      items: cart,
      date: getActualDate(),
      total: calcularTotalYEnvio(true, cart)
    };
    const newOrder = await createOrder(order);
    setNewOrderID(newOrder.id);
    clear();
  }

  return (
    <>
      {
        newOrderID ? (
          <Alert severity="success" className="checkout alert">
            <AlertTitle>Pedido realizado con exito!</AlertTitle>
            Numero de Orden: {newOrderID}
          </Alert>
        ) : (
          <Container className="checkout">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <div className="subtitleCheckout">
                  <Typography variant="subtitle1">Gracias por confiar en nosotros</Typography>
                  <Typography variant="h4">COMPLETA LA COMPRA</Typography>
                </div>
              </Grid>
              <Grid item xs={6}>
                  <Container>
                    <Typography variant="h5">Datos de contacto</Typography>
                    <Form realizarPedido={realizarPedido} />
                  </Container>
              </Grid>
              <Grid item xs={6}>
                <Container>
                  <Typography variant="h5">Tu pedido</Typography>
                  <Order cart={cart} />
                </Container>
              </Grid>
            </Grid>
          </Container>
        )
      }
    </>
    
  )
}

export default Checkout;
