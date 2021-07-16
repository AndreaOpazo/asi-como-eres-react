import React from 'react';
import { List, ListItem, ListItemText, ListSubheader, Typography } from '@material-ui/core';
import { calcularTotalYEnvio, getActualDate } from '../../utils';
import './Order.css';

const Order = ({ cart }) => {
  return (
    <List className="itemListOrder">
      { cart.map(({ item, quantity }) => (
        <ListItem divider>
          <img
              src={item.image}
              width="130px"
              height="auto"
              alt="product"
          ></img>
          <ListItemText className="listItemText"
            primary={item.title}
            secondary={`${quantity} x $${item.price}`}
          />
        </ListItem>
      ))}
      <ListSubheader className="listSubHeader">
        FECHA: {getActualDate()}
      </ListSubheader>
      <div className="totalList">
        <ListItem>
          <ListItemText primary="Subtotal" />
          <Typography 
            component="span"
          >
            ${calcularTotalYEnvio(false, cart)}
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary="Envio" />
          <Typography 
            component="span"
          >
            $300
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary="Total" />
          <Typography 
            component="span"
          >
            ${calcularTotalYEnvio(true, cart)}
          </Typography>
        </ListItem>
      </div>
    </List>
  )
}

export default Order;
