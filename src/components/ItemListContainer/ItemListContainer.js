import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Carousel from '../Carousel/Carousel';
import Spinner from '../Spinner/Spinner';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://api-productos-prueba.herokuapp.com/productos'
      );
      const products = await response.json();
      setProducts(products.slice(0, 4));
    })();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="ItemListContainer">
      <Carousel />
      {isLoading 
        ? <Spinner />
        : <ItemList products={products} />
      }
    </div>
  );
};

export default ItemListContainer;
