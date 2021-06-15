import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () => {
  const agregarAlCarrito = (cantidadSolicitada) =>
    console.log(`Pediste ${cantidadSolicitada} mochilas.`);
  const marginT = { marginTop: 50 };
  return (
    <div style={marginT}>
      <ItemCount stock={5} initial={1} onAdd={agregarAlCarrito} />
    </div>
  );
};

export default ItemListContainer;
