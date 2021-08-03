import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  IconButton,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
  } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { CartContext } from '../../CartContext';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { calcularTotalYEnvio } from '../../utils';

const CartList = () => {
  const { cart, removeItem, clear } = useContext(CartContext);
  
  const useStyles = makeStyles(() => ({
    cell: {
      border: 0
    },
  }));

  const classes = useStyles();
  
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="justify"><b>Producto</b></TableCell>
            <TableCell align="right"><b>Cantidad</b></TableCell>
            <TableCell align="right"><b>Precio Unitario</b></TableCell>
            <TableCell align="right"><b>Importe</b></TableCell>
            <TableCell align="center">
              <Button text="Vaciar carrito" color="primary" variant="outlined" event={() => clear()} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map(({ item, quantity }) => (
            <TableRow key={item.id}>
              <TableCell align="center">
              <img
                src={item.image}
                width="130px"
                height="auto"
                alt="product"
              ></img>
              </TableCell>
              <TableCell align="justify">{item.title}</TableCell>
              <TableCell align="right">{quantity}</TableCell>
              <TableCell align="right">${item.price}</TableCell>
              <TableCell align="right">${item.price * quantity}</TableCell>
              <TableCell align="center">
                <IconButton color="inherit" onClick={() => removeItem(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell classes={{root: classes.cell}}/>
            <TableCell classes={{root: classes.cell}}/>
            <TableCell classes={{root: classes.cell}}/>
            <TableCell><b>Subtotal</b></TableCell>
            <TableCell/>
            <TableCell align="center">${calcularTotalYEnvio(false, cart)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell classes={{root: classes.cell}}/>
            <TableCell classes={{root: classes.cell}}/>
            <TableCell classes={{root: classes.cell}}/>
            <TableCell><b>Envio</b></TableCell>
            <TableCell/>
            <TableCell align="center">$300</TableCell>
          </TableRow>
          <TableRow>
            <TableCell classes={{root: classes.cell}}/>
            <TableCell classes={{root: classes.cell}}/>
            <TableCell classes={{root: classes.cell}}/>
            <TableCell classes={{root: classes.cell}}><b>Total</b></TableCell>
            <TableCell classes={{root: classes.cell}}/>
            <TableCell align="center" classes={{root: classes.cell}}>
              ${calcularTotalYEnvio(true, cart)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell align="right">
              <Link to="/checkout">
                <Button text="Comprar" color="primary" variant="contained" />
              </Link>
            </TableCell>
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartList;

