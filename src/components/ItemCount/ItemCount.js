import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [number, setNumber] = useState(initial);
  const centrado = { textAlign: 'center' };

  const sumarUno = () => {
    const nuevaCantidad = number + 1;
    if (stock >= nuevaCantidad) setNumber(nuevaCantidad);
  };

  const restarUno = () => {
    const nuevaCantidad = number - 1;
    if (nuevaCantidad >= 1) setNumber(number - 1);
  };

  const agregarAlCarrito = () => (stock > 0 ? onAdd(number) : null);

  return (
    <div style={centrado}>
      <p>{number}</p>
      <Button icon="minus" onClick={number > 1 ? restarUno : null} />
      <Button icon="plus" onClick={stock > 0 ? sumarUno : null} />
      <br />
      <Button color="black" onClick={agregarAlCarrito}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
