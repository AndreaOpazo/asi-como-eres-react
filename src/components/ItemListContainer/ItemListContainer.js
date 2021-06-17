import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://thronesapi.com/api/v2/Characters');
    const characters = await response.json();
    setData(characters.slice(0, 4));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const agregarAlCarrito = () => 'El producto se agrego al carrito.';

  return (
    <>
      <ItemList data={data} />
      <ItemCount stock={5} initial={1} onAdd={agregarAlCarrito} />
    </>
  );
};

export default ItemListContainer;
