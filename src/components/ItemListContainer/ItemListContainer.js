import React from 'react';

const centrado = { textAlign: 'center' };

const ItemListContainer = ({ greeting }) => {
  return <h2 style={centrado}>{greeting}</h2>;
};

export default ItemListContainer;
