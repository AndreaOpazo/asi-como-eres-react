import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  IconButton,
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel
  } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { CartContext } from '../../CartContext';

const CartList = () => {
  const { cart, removeItem, clear } = useContext(CartContext);
  
  const useStyles = makeStyles(() => ({
    cell: {
      border: 0
    },
  }));

  const [shipping, setShipping] = useState('withoutShipping');

  const handleChange = (e) => {
    setShipping(e.target.value);
  };

  const classes = useStyles();

  const calcularTotalYEnvio = (conEnvio) => {
    const subtotal = cart.reduce(
      (acumuladorPrecio, {item, quantity}) =>
        item.price * quantity +
        acumuladorPrecio,
      0
    );
    return conEnvio ? subtotal + 300 : subtotal;
  };
  
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
              <Button variant="outlined" onClick={() => clear()}>Vaciar Carrito</Button>
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
            <TableCell align="center">${calcularTotalYEnvio()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell classes={{root: classes.cell}}/>
            <TableCell classes={{root: classes.cell}}/>
            <TableCell classes={{root: classes.cell}}/>
            <TableCell><b>Envio</b></TableCell>
            <TableCell>
              <RadioGroup name="shipping" value={shipping} onChange={handleChange}>
                <FormControlLabel value="withoutShipping" control={<Radio />} label="No" />
                <FormControlLabel value="withShipping" control={<Radio />} label="Si" />
              </RadioGroup>
            </TableCell>
            <TableCell align="center">
              ${shipping === 'withShipping' ? 300 : 0}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell classes={{root: classes.cell}}/>
            <TableCell classes={{root: classes.cell}}/>
            <TableCell classes={{root: classes.cell}}/>
            <TableCell classes={{root: classes.cell}}><b>Total</b></TableCell>
            <TableCell/>
            <TableCell align="center">
              ${calcularTotalYEnvio(shipping === 'withShipping')}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartList;

