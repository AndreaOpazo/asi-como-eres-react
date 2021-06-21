import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://thronesapi.com/api/v2/Characters');
      const characters = await response.json();
      setCharacters(characters.slice(0, 4));
    })();
  }, []);

  const agregarAlCarrito = () => 'El producto se agrego al carrito.';

  return (
    <>
      <ItemList characters={characters} />
      <ItemCount stock={5} initial={1} onAdd={agregarAlCarrito} />
    </>
  );
};

export default ItemListContainer;
