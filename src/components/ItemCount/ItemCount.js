import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '../Button/Button';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {

  const [number, setNumber] = useState(initial);

  const sumarUno = () => {
    const nuevaCantidad = number + 1;
    if (stock >= nuevaCantidad) setNumber(nuevaCantidad);
  };

  const restarUno = () => {
    const nuevaCantidad = number - 1;
    if (nuevaCantidad >= 1) setNumber(number - 1);
  };

  const agregarAlCarrito = () => {
    if (stock > 0) onAdd(number);
  };

  return (
    <div className="CounterSection">
      <div className="btn-section">
        <div className="icon-section">
          <IconButton onClick={number > 1 ? restarUno : null}>
            <RemoveCircleIcon fontSize="large" />
          </IconButton>
          <span className="span-counter">{number}</span>
          <IconButton onClick={stock > 0 ? sumarUno : null}>
            <AddCircleIcon fontSize="large" />
          </IconButton>
        </div>
        <br />
        <Button variant="contained" color="primary" text="Agregar al carrito" event={agregarAlCarrito} disabled={stock === 0} />
      </div>
    </div>
  );
};

export default ItemCount;
