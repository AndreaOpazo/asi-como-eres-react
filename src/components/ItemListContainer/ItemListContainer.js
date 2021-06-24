import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Carousel from '../Carousel/Carousel';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://api-productos-prueba.herokuapp.com/productos'
      );
      const products = await response.json();
      setProducts(products.slice(0, 4));
    })();
  }, []);

  return (
    <div className="ItemListContainer">
      <Carousel />
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
